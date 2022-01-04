
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

 
  //   gigs: [
  //     {title: "Juggler", description: "Performer with the ability to juggle", location: "Shanghai", rate: "$300", date_posted: "01/03/2022", term: "1 day", expiration: "01/26/2022" }
  //   ],
 globalData: {
    userInfo: null,
    // url: "http://localhost:3000/api/v1",
    url: "http://gig-finder-api.wogengapp.cn/api/v1"
  },

    globalData: {
    gigs: [
      {
      "id": 1,
      "name": "Tandem Bicycle",
      "price": "10",
      "description": "Fun for couples!"
      },
      {
        "id": 2,
        "name": "Mountain Bike",
        "price": "17",
        "description": "Full suspension"
        }
    ]
  }

})
