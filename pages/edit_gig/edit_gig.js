// pages/edit_gig/edit_gig.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    let page = this;

    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1500
    });


    // Get story data from server (to show in form)
    wx.request({
      url: `http://localhost:3000/api/v1/gig/${options.id}`,
      method: 'GET',
      success(res) {
        var gig = res.data;

        // Update local data
        page.setData(
          gig
        );

        wx.hideToast();
      }
    });

    // const page = this
    // wx.request({
    //   url: `http://localhost:3000/api/v1/gigs/${options.id}`,
    //   success: res => {
    //     console.log(res)
    //     page.setData({gig: res.data})
    //     wx.setNavigationBarTitle({
    //       title: page.data.gig.title,
    //     })
    //   }
    // })

    // const id = options.id
    // const app = getApp()
    // const globalData = app.globalData
    // this.setData(globalData)
    // const gigs = globalData.gigs

    // let gig = gigs.filter(gig => gig.id == id)

    // const page = this
    // page.setData(gig[0])

  },

  bindSubmit: function (e) {
    // const page = this

    let title = e.detail.value.title;
    let text = e.detail.value.text;
    let id = this.data.id;

    let gig = {
      title: title,
      text: text
    }

    // Update api data
    wx.request({
      url: `http://localhost:3000/api/v1/gigs/${id}`,
      method: 'PUT',
      data: gig,
      success() {
        // redirect to index page when done
        wx.switchTab({
          url: '/pages/index/index'
        });
      }
    });




    // const gig = e.detail.value
    // const app = getApp()
    // const gigs = app.globalData.gigs

    // app.globalData.gigs[index] = gig
    
    // this line needs to  be uncomented once the information is coming through
    
    // wx.reLaunch({
    //   url: 'pages./index/index',
    // })
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