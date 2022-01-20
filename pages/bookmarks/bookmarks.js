// pages/bookmarks/bookmarks.js
const app = getApp()
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
      url: `${app.globalData.url}/users?bookmark=true`,
      // url: `http://localhost:3000/api/v1/users?bookmark=true`,
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
      url: `${app.globalData.url}/gigs?bookmark=true`,
      // url: `${app.globalData.url}/gigs`,
      success: res => {
        console.log("fetch gigs res", res)
        page.setData(res.data)
      }
    })
  },
  
    goToShowGig: function (e) {
      console.log(e.currentTarget.dataset)
      console.log("Here", e)
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/gig_show/gig_show?id=${id}`,
      })
    },

    goToShowTalent: function(e) {
      console.log(e.currentTarget.dataset)
      console.log("Here", e)
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/talent_show/talent_show?id=${id}`,
      })
    },






  onLoad: function (options) {
    this.fetchTalents()
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