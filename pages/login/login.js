const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
 
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  goToIndex: function (e) {
    console.log("clicked")
    wx.switchTab({ 
     url: '/pages/index/index',
    })
  },

  getUserProfile(e) {
    console.log("clicked info", e)
    let page = this
    wx.getUserProfile({
      desc: 'got user profile',
      success: (res) => {
        console.log("error", app.globalData)
        const userId = app.globalData.user.id
        // update part in backend
        wx.request({
          url: `${app.globalData.url}/users/${userId}`,
          method: 'PUT', // or PATCH 
          data: {
            userInfo: res.userInfo
          },

          success: (res) => {
            page.setData({
              user: res.data.currentUser,
              hasUserInfo: true
            })
          }
        })

      }
    })
  },

  getUserInfo(e) {
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
