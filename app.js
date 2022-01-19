
App({
  onLaunch() {
    const app = this
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        console.log("response =", res)
        wx.request({
          url: `${app.globalData.url}/login`,
          method: 'POST',
          data: {code: res.code},
          success: (res)=> {
            const user = res.data.currentUser
            console.log("res", res)
            // getApp().globalData.user = user 
            wx.setStorageSync('user', user)
            wx.setStorageSync('headers', res.data.headers)
          },
          fail(e){
            console.log(e)
          }
        })
      }
    })
  },

  getUserProfile(e) {
    console.log("clicked info", e)
    let page = this
    wx.getUserProfile({
      desc: 'got user profile',
      success: (result) => {
        console.log({result})
        console.log("good job", app.globalData)
        const user = wx.getStorageSync('user')
        // updates part in backend and saves
        app.globalData.userInfo = result.userInfo
        wx.request({
          header: wx.getStorageSync('headers'),
          url: `${app.globalData.url}/users/${user.id}`,
          method: 'PUT', 
          data: {
            userInfo: result.userInfo
          },

          success: (res) => {
            page.setData({
              user: res.data.currentUser,
              hasUserInfo: true
            })
            wx.switchTab({
              url: '/pages/my_profile/my_profile',
            })
          }
        })
      }
    })
  },

 globalData: {
    userInfo: null,
    // LOCAL HOST IS FOR LOCAL RAILS S. NOT PRODUCTION
    // url: "http://localhost:3000/api/v1",

    // PRODUCTION API (MAY NOT HAVE ALL THE LATEST CHANGES & UPDATES FROM BACKEND)
    url: "https://gig-finder-api.shanghaiwogeng.com/api/v1"
  }
})
