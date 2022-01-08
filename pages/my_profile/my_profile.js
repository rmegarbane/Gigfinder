// pages/my_profile/my_profile.js
Page({
  data: {
  },

  viewProfile: function(e) {
    wx.reLaunch({
      // update to user profile as seen by anyone
      url: '/pages/my_profile/my_profile',
    })
  },

  updateProfile: function(e) {
    wx.navigateTo({
      url: '/pages/setup_profile/setup_profile',
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


  onLoad: function (options) {
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