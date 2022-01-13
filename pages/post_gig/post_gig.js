// pages/post_gig/post_gig.js


Page({
  data: {
  },

  bindSubmit: function (e) {

    let gigs = {
      title: e.detail.value.title,
      description: e.detail.value.description,
      location: e.detail.value.location,
      rate: e.detail.value.rate,
      term: e.detail.value.term
    }

    wx.request({
      url: `http://localhost:3000/api/v1/gigs`,
      method: 'POST',
      data: {gig: gig},
      success: res => {
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