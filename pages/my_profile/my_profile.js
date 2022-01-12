const app = getApp();


Page({
  data: {
  },

  updateProfile: function(e) {
    wx.navigateTo({
      url: '/pages/setup_profile/setup_profile',
    })
  },

  addTalent: function(e) {
    wx.navigateTo({
      url: '/pages/post_talent/post_talent',
    })
  },

  addGig: function(e) {
    wx.reLaunch({
      // update to create new gig page
      url: '/pages/post_gig/post_gig',
    })
  },

  viewAllGigs: function(e) {
    wx.navigateTo({
      url: '/pages/my_gigs/my_gigs',
    })
  },


  onLoad() {
    const userInfo = app.globalData.userInfo
    this.setData({ userInfo })
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