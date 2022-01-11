// pages/gig_list/gig_list.js
Page({


  data: {
  },


  goToShowGig: function (e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/gig_show/gig_show?id=${id}`,
    })
  },


  // goToShow: function(e) {
  //   const gigIndex = e.target.dataset.index
  //   wx.navigateTo({
  //     url: `/pages/gig_show/gig_show?index=${gigIndex}`
  //   })
// },


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


  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

 
  onPullDownRefresh: function () {

  },


  onReachBottom: function () {

    

  },


  onShareAppMessage: function () {

  }
})
