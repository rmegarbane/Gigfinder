
App({
  onLaunch() {
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        console.log("response =", res)
        wx.request({
          url: `${getApp().globalData.url}/login`,
          method: 'POST',
          data: {code: res.code},
          success: (res)=> {
            const user = res.data.currentUser
            console.log("res", res)
            getApp().globalData.user = user 
            wx.setStorageSync('user', user)
          }
        })
      }
    })
  },

  globalData: {
    userInfo: null,
    url: "http://localhost:3000/api/v1",
    // url: "http://gig-finder-api.wogengapp.cn/api/v1"
  }
})
