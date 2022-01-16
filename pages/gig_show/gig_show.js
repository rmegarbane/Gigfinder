
let app = getApp()
// let app = App()



Page({

  data: {
  },

  connect(e) {
    console.log("clicked info", e)
    let page = this
    wx.getUserProfile({
      desc: 'got user profile',
      success: (result) => {
        console.log({result})
        console.log("good job", app.globalData)
        const user = wx.getStorageSync('user')
        // updates part in backend and saves
        app.globalData.userInfo = result.userInfo
        wx.request({
          header: wx.getStorageSync('headers'),
          url: `${app.globalData.url}/users/${user.id}`,
          method: 'PUT', 
          data: {
            userInfo: result.userInfo
          },

          success: (res) => {
            page.setData({
              user: res.data.currentUser,
              hasUserInfo: true
            })
            wx.navigateTo({
              url: `/pages/inquiry/inquiry?gig_id=${page.data.gig.id}`,
            })
            // wx.switchTab({
            //   url: '/pages/my_profile/my_profile',
            // })
          }
        })
      }
    })
  },



  listenerBookmark: function (event) {
    console.log('clicked favorite');
    console.log(event);
    // how to make the image change color?
    // event.toggle('img-darken');
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      url: `http://localhost:3000/api/v1/gigs/${this.data.gig.id}/gig_bookmarks`,
      method: 'POST',
      success: (res) => {
        console.log(res)
        page.setData({gig:res.data})
      }

    })
    wx.showToast({
      title: 'Bookmarked',
    })
  },

  editGig: function (e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = this.data.gig.id
    wx.navigateTo({
      url: `/pages/edit_gig/edit_gig?id=${id}`,
    })
  },

  deleteGig: function (e) {
    const page = this

    wx.request({
    header: wx.getStorageSync('headers'),
    url: `http://localhost:3000/api/v1/gigs/${page.data.gig.id}`,
    method: 'DELETE',
    success: res => {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  })

  },
  

  onLoad: function (options) {
    const page = this
    const user = wx.getStorageSync('user')
    page.setData({user})
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

  // deleteGig: function (e) {
  //   const id = e. currentTarget.dataset.id

  //   const app = getApp()
  //   const globalData = app.globalData
  //   const gigs = globalData.gigs

  //   const index = gigs.findIndex(r => r.id == id )

  //   app.globalData.gigs.splice(index, 1)

  //   wx.reLaunch ({
  //     url: '/pages/index/index',
  //   })

  // },


  // onReady: function () {
  // },


  onShow: function () {
  },


  onHide: function () {
  },


  onUnload: function () {
  },

 
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
    const { gig } = this.data
    return {
      title: `Opportunity as a ${gig.title}`,
      imageUrl: "https://batch-707.oss-cn-beijing.aliyuncs.com/for_hire.jpg",
      path: `/pages/gig_show/gig_show?id=${gig.id}`
    }
  }
})