
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
    gigs: [
      {title: "Juggler", description: "Performer with the ability to juggle", location: "Shanghai", rate: "$300", date_posted: "01/03/2022", term: "1 day", expiration: "01/26/2022" }
    ],

    userInfo: null,
    // LOCAL HOST IS FOR LOCAL RAILS S. NOT PRODUCTION
    // url: "http://localhost:3000/api/v1",
    // PRODUCTION API (MAY NOT HAVE ALL THE LATEST CHANGES & UPDATES FROM BACKEND)
    url: "http://gig-finder-api.wogengapp.cn/api/v1"
  }
})
