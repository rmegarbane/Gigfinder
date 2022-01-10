// pages/gig_list/gig_list.js
Page({

  /**
   * Page initial data
   */
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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  
    const app = getApp()
    const globalData = app.globalData
    this.setData(globalData)

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
