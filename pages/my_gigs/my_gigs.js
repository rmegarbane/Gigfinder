let app = getApp()
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
  
  // onLoad: function (options) {
  //   const page = this
  //   wx.request({
  //     header: wx.getStorageSync('headers'),
  //     url: `${app.globalData.url}`,
  //     success: res => {
  //       console.log(res)
  //       page.setData(res.data)
  //     }
  //   })
  // },


  onLoad: function (options) {
    console.log("options here", options)
    const page = this
    const user = wx.getStorageSync('user')
    page.setData({user})
    wx.request({
      header: wx.getStorageSync('headers'),
      // url: `http://localhost:3000/api/v1/gigs/${options.id}`,
      url: `${app.globalData.url}/gigs?my=true`,
      success: res => {
        console.log("my gigs", res)
        // set to AppData
        page.setData({gigs: res.data.gigs})
      }
    })



    // const id = options.id
    // const app = getApp()
    // const globalData = app.globalData
    // this.setData(globalData)
    // const gigs = globalData.gigs

    // let gig = gigs.filter(gig => gig.id == id)

    // const page = this
    // page.setData(gig[0])


    // const page = this
    // const gig_id = options.id
    // const auth = wx.getStorageSync('auth')
    // const header = {
    //   'X-User-Email': auth.email,
    //   'X-User-Token': auth.token
    // }
    // console.log("This is the header", header)
    // wx.request({
    //   url: `${getApp().globalData.baseUrl}/gigs/${gig_id}`,
    //   header, 
    //   success(res) {
    //     page.setData({ gig: res.data.gig })
    //   }
    // })
  },

  homePage: function(e) {
    wx.switchTab({
      url: '/pages/my_profile/my_profile',
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
