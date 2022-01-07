// pages/my_gigs/my_gigs.js
Page({

  data: {
  },

  onLoad: function (options) {
    const app = getApp()
    const globalData = app.globalData
    this.setData(globalData)
    console.log("My_gigs page has loaded", globalData)
  },

  goToShowGig: function (e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/gig_show/gig_show?id=${id}`,
    })
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