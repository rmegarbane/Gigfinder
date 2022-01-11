// pages/gig_show/gig_show.js

let app = App()


Page({

  /**
   * Page initial data
   */
  data: {

  },

  editGig: function (e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = this.data.gig.id
    wx.navigateTo({
      url: `/pages/edit_gig/edit_gig?id=${id}`,
    })
  },


  onLoad: function (options) {
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      // url: `http://localhost:3000/api/v1/gigs/${options.id}`,
      url: `http://localhost:3000/api/v1/gigs/${options.id}`,
      success: res => {
        console.log(res)
        page.setData({gig: res.data})
        wx.setNavigationBarTitle({
          title: page.data.gig.title,
        })
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

  deleteGig: function (e) {
    const id = e. currentTarget.dataset.id

    const app = getApp()
    const globalData = app.globalData
    const gigs = globalData.gigs

    const index = gigs.findIndex(r => r.id == id )

    app.globalData.gigs.splice(index, 1)

    wx.reLaunch ({
      url: '/pages/index/index',
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