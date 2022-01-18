// const heart = document.querySelector("#heart")
let app = getApp()

Page({
  data: {
  },

  onLoad: function (options) {
    const page = this
    console.log("here are the options", options)
    wx.request({

      // This line below seems to interfere with userInfo functionality?

      header: wx.getStorageSync('headers'),
      // url: `http://localhost:3000/api/v1/gigs/${options.id}`,
      url: `${app.globalData.url}/users/${options.id}`,
      success: res => {
        console.log(res)
        page.setData({user: res.data})
        wx.setNavigationBarTitle({
          title: "NEW TALENT",
        })
      }
    })
  },


  getUserProfile(e) {
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
            wx.switchTab({
              url: '/pages/my_profile/my_profile',
            })
          }
        })
      }
    })
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
              url: `/pages/inquiry/inquiry?user_id=${page.data.user.id}`,
            })
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
      url: `${app.globalData.url}/users/${this.data.user.id}/talent_bookmarks`,
      method: 'POST',
      success: (res) => {
        console.log(res)
        page.setData({user:res.data})
      }

    })
    wx.showToast({
      title: 'Bookmarked',
    })
  },


 onShareAppMessage: function () {
  const { user } = this.data
  return {
    title: `Meet a ${user.talent}`,
    imageUrl: user.image,
    path: `/pages/talent_show/talent_show?id=${user.id}`
  }
  // console.log('share')
  // wx.showShareMenu({
  //  withShareTicket: true
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
      const { user } = this.data
      return {
        title: `Meet a ${user.talent}`,
        imageUrl: user.image,
        path: `/pages/talent_show/talent_show?id=${user.id}`
      }
  }
})