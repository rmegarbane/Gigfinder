// pages/post_gig/post_gig.js

let app = getApp()
Page({
  data: {
  },

  bindSubmit: function (e) {
    console.log(111, e.detail)
    const gig = e.detail.value
    wx.request({
      header: wx.getStorageSync('headers'),
      // url: `${app.globalData.url}`,
      url: `${app.globalData.url}/gigs`,
      method: 'POST',
      data: {gig: gig},
      success: res => {
        console.log("res here", res)
        wx.switchTab({
          url: '/pages/index/index',

        });
      }
  })
},
    // const page = this
    // const formData = e.detail.value
    // console.log("form data", formData)
    // const app = getApp()
    // const auth = wx.getStorageSync('auth')
    // const header = {
    //   'X-User-Email': auth.email,
    //   'X-User-Token': auth.token
    // }
    // wx.request({
    //   url: `${getApp().globalData.baseUrl}/gigs`,
    //   // url: `http://localhost:3000/api/v1/gigs`,
    //   header,
    //   method: "POST",
    //   data: {
    //     product: formData,
    //   },
    //   success(res) {
    //     console.log("server response", res.data)
    //     page.setData(res.data)
    //   }
    // })


  onLoad: function (options) {
  },

  onReady: function () {
  },

  onShow: function () {
  },

  onHide: function () {
  },

  onUnload: function () {
  },

  onPullDownRefresh: function () {
  },

  onReachBottom: function () {
  },

 
  onShareAppMessage: function () {
  }
})