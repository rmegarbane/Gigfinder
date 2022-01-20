const app = getApp();

Page({
  data: {
  },

  getUserProfile(e) {
    console.log("clicked info", e)
    const { action } = e.currentTarget.dataset
    let page = this
    const { user } = this.data
    if (!user.name && !user.image) {
      wx.getUserProfile({
        desc: 'got user profile',
        success: (result) => {
          console.log({result})
          console.log("good job", app.globalData)
          const user = wx.getStorageSync('user')
          // updates part in backend and saves
          app.globalData.userInfo = result.userInfo
          wx.request({
            url: `${app.globalData.url}/users/${user.id}`,
            method: 'PUT', 
            header: wx.getStorageSync('headers'),
            data: {
              userInfo: result.userInfo
            },
            success: (res) => {
              page.setData({
                user: res.data.currentUser,
                hasUserInfo: true
              })
              page.goToMenu(action)
            }
          })
        }
      })
    } else {
      page.goToMenu(action)
    }
    
  },

   goToMenu(action) {
     const page = this
      switch (action) {
        case 'addTalent':
          page.addTalent();
          break;
        case 'addGig':
          page.addGig();
          break;
        case 'viewAllGigs':
          page.viewAllGigs();
          break;
        case 'viewInquiries':
          page.viewInquiries();
          break;                
        default:
      }
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
    wx.navigateTo({
      // update to create new gig page
      url: '/pages/post_gig/post_gig',
    })
  },

  viewAllGigs: function(e) {
    wx.navigateTo({
      url: '/pages/my_gigs/my_gigs',
    })
  },

  viewInquiries: function(e) {
    wx.navigateTo({
      url: '/pages/my_inquiries/my_inquiries',
    })
  },

  onLoad() {
    // const userInfo = app.globalData.userInfo
    const user = wx.getStorageSync('user')
    this.setData({ user })
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