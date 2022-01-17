// pages/edit_gig/edit_gig.js

let app = getApp()

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
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      url: `${app.globalData.url}/gigs/${options.id}`,
      success: res => {
        console.log(res)
        page.setData({gig: res.data})
        wx.setNavigationBarTitle({
          title: page.data.gig.title,
        })
      }
    })
  },




  bindSubmit: function (e) {

    console.log(111, e.detail)
    const gig = e.detail.value
    
    // Need these lines on every wx.request
    const headers = wx.getStorageSync('headers')
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      // To here
      url: `${app.globalData.url}/gigs/${page.data.gig.id}`,
      method: 'PUT',
      data: {gig},
      success: res => {
        console.log('update gig result',res.data)
        wx.switchTab({
          url: '/pages/index/index'
        });
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