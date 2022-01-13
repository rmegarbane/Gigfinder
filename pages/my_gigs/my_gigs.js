// pages/my_gigs/my_gigs.js
Page({

  data: {
  },

  onLoad: function (options) {
    const page = this
    wx.request({
      url: 'http://localhost:3000/api/v1/gigs',
      success: res => {
        console.log(res)
        page.setData(res.data)
      }
    })
  },

  goToShowGig: function (e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/gig_show/gig_show?id=${id}`,
    })
  },

  goToEditGig: function (e) {

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