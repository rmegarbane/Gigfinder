Page({

  data: {
  },

  // This exchanged for below code

  goToShowGig: function (e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/gig_show/gig_show?id=${id}`,
    })
  },
  
  onLoad: function (options) {
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      url: 'http://localhost:3000/api/v1/gigs',
      success: res => {
        console.log(res)
        page.setData(res.data)
      }
    })
  },


  onReady: function () {
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

  onPullDownRefresh: function () {
  },



  onReachBottom: function () {
  },

  onReachBottom: function () {
  },


  onShareAppMessage: function () {
  },
    
  onShareAppMessage: function () {
  }
})
