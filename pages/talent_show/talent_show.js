
Page({

  data: {
    user: 
      {
        "id": 1, 
        "name": "Lobro",
        "image": "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        "rate": "250/hr",
        "talent": "Actor",
        "description": "I am great on and off camera. I do lots of fun voices and have experience voicing cartoon characters as well as professional marketing videos."
      }
  },

  onLoad: function (options) {
    // comment this in when connected to backend data

    // const page = this
    // //options:  {id: 1}
    // const id = options.id
    // const auth = wx.getStorageSync('auth')
    // const header = {
    //   'X-User-Email': auth.email,
    //   'X-User-Token': auth.token
    // }
    // console.log("This is the header", header)
    // wx.request({
    //   // url: `${getApp().globalData.baseUrl}/users/${id}`,
    //   url: `${getApp().globalData.baseUrl}/users/1`,
    //   header, 
    //   success(res) {
    //     page.setData({ user: res.data.user })
    //   }
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
  }
})