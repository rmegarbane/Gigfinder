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
      url: `http://localhost:3000/api/v1/users/${options.id}`,
      success: res => {
        console.log(res)
        page.setData({user: res.data})
        wx.setNavigationBarTitle({
          title: "NEW TALENT",
        })
      }
    })
  },

// <<<<<<< profile-login
// =======
//   getUserProfile(e) {
//     console.log("clicked info", e)
//     let page = this
//     wx.getUserProfile({
//       desc: 'got user profile',
//       success: (result) => {
//         console.log({result})
//         console.log("good job", app.globalData)
//         const user = wx.getStorageSync('user')
//         // updates part in backend and saves
//         app.globalData.userInfo = result.userInfo
//         wx.request({
//           url: `${app.globalData.url}/users/${user.id}`,
//           method: 'PUT', 
//           data: {
//             userInfo: result.userInfo
//           },

//           success: (res) => {
//             page.setData({
//               user: res.data.currentUser,
//               hasUserInfo: true
//             })
//             wx.switchTab({
//               url: '/pages/my_profile/my_profile',
//             })
//           }
//         })
//       }
//     })
//   },


// >>>>>>> master
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



  listenerBookmark: function (event) {
    console.log('clicked favorite');
    console.log(event);
    // how to make the image change color?
    // event.toggle('img-darken');
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      url: `http://localhost:3000/api/v1/users/${this.data.user.id}/talent_bookmarks`,
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
  console.log('share')
  wx.showShareMenu({
   withShareTicket: true
  })
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