// pages/gig_list/gig_list.js
Page({

  /**
   * Page initial data
   */
  data: {

  },


  // This exchanged for below code

  // goToShowGig: function (e) {
  //   console.log(e.currentTarget.dataset)
  //   console.log("Here", e)
  //   const id = e.currentTarget.dataset.id
  //   wx.navigateTo({
  //     url: `/pages/gig_show/gig_show`,
  //   })
  // },

  goToShowGig: function (e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const gigIndex = e.target.dataset.index
    wx.navigateTo({
      url: `/pages/gig_show/gig_show?index=${gigIndex}`
    })
  },


  // goToShow: function(e) {
  //   const gigIndex = e.target.dataset.index
  //   wx.navigateTo({
  //     url: `/pages/gig_show/gig_show?index=${gigIndex}`
  //   })
// },




  /**
   * Lifecycle function--Called when page load
   */
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

  /**
   * Lifecycle function--Called when page is initially rendered
   */
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

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

    

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
