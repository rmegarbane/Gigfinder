const app = getApp()
// pages/my_inquiries/my_inquiries.js
Page({

  data: {
  },

  onLoad: function (options) {
    const page = this
    const user_id = wx.getStorageSync('user').id
    wx.request({
      url: `${app.globalData.url}/inquiries`,
      method: 'GET',
      header: wx.getStorageSync('headers'), 
      data: { user_id },
      success(res) {
        console.log(res)
        page.setData({inquiries: res.data.inquiries})
        wx.setNavigationBarTitle({
          title: "YOUR CONNECTIONS",
        })
      }
    })
  },

  onReady: function () {

  },


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