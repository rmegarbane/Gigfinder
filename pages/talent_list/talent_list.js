// pages/talent_list/talent_list.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToShowUserTalent: function(e) {
    console.log({e})
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/talent_show/talent_show?id=${id}`,
    })
  },

  onLoad: function (options) {


    const app = getApp()
    const globalData = app.globalData
    this.setData(globalData)
    
    // const page = this
    // wx.request({
    //   url: 'http://localhost:3000/api/v1/users',
    //   success: res => {
    //     console.log(res)
    //     page.setData(res.data)
    //   }
    // })

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