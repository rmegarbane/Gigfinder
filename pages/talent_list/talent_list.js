// pages/talent_list/talent_list.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

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
    // comment this back when resolved jbuilder issue -AM 1-10-2022
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      url: `${app.globalData.url}/users`,
      success: res => {
        console.log("here's the user data ->", res)
        page.setData(res.data)
      }
    })
  },

  // onLoad: function (options) {
  //   const page = this
  //   wx.request({
  //     url: 'http://localhost:3000/api/v1/gigs',
  //     success: res => {
  //       console.log(res)
  //       page.setData(res.data)
  //     }
  //   })
  // },

    //     console.log(res)
    //     page.setData(res.data)
    //   }
    // })

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