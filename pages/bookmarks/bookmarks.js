// pages/bookmarks/bookmarks.js
Page({

  /**
   * Page initial data
   */
  data: {
    currentTab: "talent"
  },

  switchTab: function (e) {
    const page = this
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const tab = e.currentTarget.dataset.tab
    this.setData({currentTab: tab})
    if (tab==='talent') {
    this.fetchTalents()
    }
    else {
      this.fetchGigs()
    }
    // wx.navigateTo({
    //   url: `/pages/gig_list/gig_list?id=${id}`,
    // })
  },

  fetchTalents: function (query= null) {
    const page= this
    wx.request({
      header: wx.getStorageSync('headers'),
      
      url: `http://localhost:3000/api/v1/users?bookmark=true`,

      success: res => {
        console.log(res)
        page.setData(res.data)
      }
    })
  },

  fetchGigs: function (query= null) {
    const page= this
    wx.request({
      header: wx.getStorageSync('headers'),
      
      url: `http://localhost:3000/api/v1/gigs?bookmark=true`,

      success: res => {
        console.log(res)
        page.setData(res.data)
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.fetchTalents()

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