// pages/post_gig/post_gig.js
Page({
  data: {
  },

  bindSubmit: function (e) {
    const page = this
    const formData = e.detail.value
    console.log("form data", formData)
    const app = getApp()
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    wx.request({
      url: `${getApp().globalData.baseUrl}/gigs`,
      header,
      method: "POST",
      data: {
        product: formData,
      },
      success(res) {
        console.log("server response", res.data)
        page.setData(res.data)
      }
    })
    wx.reLaunch({
      url: '/pages/my_gigs/my_gigs',
    })
  },

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