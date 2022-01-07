// pages/setup_profile/setup_profile.js
Page({

  data: {
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
          src: res.tempFilePaths
        })
        console.log(res.tempFilePaths)
        // const tempFilePaths = res.tempFilePaths
      }
    })

    // Get image info
    wx.getImageInfo({
      src: res.tempFilePaths[0],
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
        console.log(res.path)
      }
    }) 
  },


  onLoad: function (options) {
    // show existing user data
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