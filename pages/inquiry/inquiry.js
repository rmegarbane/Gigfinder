const app = getApp()

// pages/inquiry/inquiry.js
Page({

  /**
   * Page initial data
   */
  data: {
  },


  bindSubmit: function (e) {
    console.log("COMMENT HERE:", e.detail.value.message)
    // get user id
    const user_id = wx.getStorageSync('user').id
    // get gig id
    const gig_id = this.data.gig_id
    const message = e.detail.value.message
    // POST request here
    wx.request({
      url: `${app.globalData.url}/gigs/${gig_id}/inquiries`,
      method: 'POST',
      header: wx.getStorageSync('headers'), 
      data: { message, user_id },
      success(res) {
        console.log(res)
        if (res.statusCode == 200) {
          wx.showToast({
            title: 'Sent!',
          })
          wx.navigateBack({
            delta: 1,
          })
        }
      }
    })
  },



  onLoad: function (options) {
    this.setData({gig_id: Number(options.gig_id)})
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