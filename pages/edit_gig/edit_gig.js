// pages/edit_gig/edit_gig.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    const id = options.id
    const app = getApp()
    const globalData = app.globalData
    this.setData(globalData)
    const gigs = globalData.gigs

    let gig = gigs.filter(gig => gig.id == id)

    const page = this
    page.setData(gig[0])

  },

  bindSubmit: function (e) {
    const page = this
    const gig = e.detail.value
    const app = getApp()
    const gigs = app.globalData.gigs

    app.globalData.gigs[index] = gig
    
    // this line needs to  be uncomented once the information is coming through
    
    // wx.reLaunch({
    //   url: 'pages./index/index',
    // })
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