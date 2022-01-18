const app = getApp()
// pages/post_talent/post_talent.js
Page({

  data: {
    src: null
  },


  // Documentation for image upload function: https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.getImageInfo.html

  uploadImageButton: function (e) {
    const that = this
    console.log(e.currentTarget.dataset)
    const id = e.currentTarget.dataset.id
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        console.log('success!')
        // tempFilePath can be used as the src attribute of the img tag to display pictures
        that.setData({
          src: res.tempFilePaths[0]
        })
        console.log(res.tempFilePaths)
        
        // const tempFilePaths = res.tempFilePaths
      }
    })

    // Get image info
    // wx.getImageInfo({
    //   src: res.tempFilePaths[0],
    //   success: function (res) {
    //     console.log(res.width)
    //     console.log(res.height)
    //     console.log(res.path)
    //   }
    // }) 
  },

  bindSubmit: function(e) {
    console.log(e)
    let id = this.data.id;
    let user = e.detail.value
    let page = this
    // Update api data
    wx.request({
      url: `${app.globalData.url}/users/${id}`,
      method: 'PUT',
      header: wx.getStorageSync('headers'),
      data: {user: user},
      success() {
        // redirect to dashboard page when done
        if (page.data.src) {
          // upload 
          wx.uploadFile({
            filePath: page.data.src,
            name: 'file',
            header: wx.getStorageSync('headers'),
            // url: `${app.globalData.url}/image_upload`,
            url: `${app.globalData.url}/users/${page.data.id}/image_upload`,
          })
          wx.redirectTo({
            url: '/pages/talent_list/talent_list'
          })
        } else {
          wx.redirectTo({
            url: '/pages/talent_list/talent_list'
          });
        }
        
      }
    });
  },


  // getUserProfile(e) {
  //   console.log("clicked info", e)
  //   let page = this
  //   wx.getUserProfile({
  //     desc: 'got user profile',
  //     success: (result) => {
  //       console.log({result})
  //       console.log("good job", app.globalData)
  //       const user = wx.getStorageSync('user')
  //       // updates part in backend and saves
  //       app.globalData.userInfo = result.userInfo
  //       wx.request({
  //         url: `${app.globalData.url}/users/${user.id}`,
  //         method: 'PUT', 
  //         data: {
  //           userInfo: result.userInfo
  //         },

  //         success: (res) => {
  //           page.setData({
  //             user: res.data.currentUser,
  //             hasUserInfo: true
  //           })
  //           wx.switchTab({
  //             url: '/pages/my_profile/my_profile',
  //           })
  //         }
  //       })
  //     }
  //   })
  // },










  onLoad: function (options) {
    const user = wx.getStorageSync('user')
    this.setData(user)
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