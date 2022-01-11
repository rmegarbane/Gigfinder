// pages/talent_list/talent_list.js
Page({

  /**
   * Page initial data
   */
  data: {
    // users: [
    //   {
    //     "id": 1, 
    //     "name": "Lobro",
    //     "image": "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    //     "rate": "250/hr",
    //     "talent": "Actor",
    //     "description": "I am great on and off camera. I do lots of fun voices and have experience voicing cartoon characters as well as professional marketing videos."
    //   },
    //   {
    //     "id": 2, 
    //     "name": "Smashing Zucchini",
    //     "image": "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    //     "rate": "130/hr",
    //     "talent": "Bartender",
    //     "description": "Have over 7 years' experience in mixology and bartending. I do catering and event coordination as well. Very excited to host your next event!"
    //   },
    //   {
    //     "id": 3, 
    //     "name": "Stone Cold",
    //     "image": "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    //     "rate": "212/hr",
    //     "talent": "Tattoo artist",
    //     "description": "Have given tattoos to celebrities such as Kayne West and the Queen of England."
    //   },
    //   {
    //     "id": 4, 
    //     "name": "Tinsel",
    //     "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    //     "rate": "400/hr",
    //     "talent": "Professor of history and science",
    //     "description": "Over 14 years' experience teaching in secondary and university settings. History is my primary subject. "
    //   },      
    //   {
    //     "id": 1, 
    //     "name": "Lobro",
    //     "image": "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    //     "rate": "250/hr",
    //     "talent": "Actor",
    //     "description": "I am great on and off camera. I do lots of fun voices and have experience voicing cartoon characters as well as professional marketing videos."
    //   },
    //   {
    //     "id": 2, 
    //     "name": "Smashing Zucchini",
    //     "image": "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    //     "rate": "130/hr",
    //     "talent": "Bartender",
    //     "description": "Have over 7 years' experience in mixology and bartending. I do catering and event coordination as well. Very excited to host your next event!"
    //   },
    //   {
    //     "id": 3, 
    //     "name": "Stone Cold",
    //     "image": "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    //     "rate": "212/hr",
    //     "talent": "Tattoo artist",
    //     "description": "Have given tattoos to celebrities such as Kayne West and the Queen of England."
    //   },
    //   {
    //     "id": 4, 
    //     "name": "Tinsel",
    //     "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    //     "rate": "400/hr",
    //     "talent": "Professor of history and science",
    //     "description": "Over 14 years' experience teaching in secondary and university settings. History is my primary subject. "
    //   },
    // ],
    // gigs: [
    //   {
    //   "id": 1,
    //   "title": "Juggler",
    //   "description": "Performer with the ability to juggle",
    //   "location": "Shanghai",
    //   "rate": "$300",
    //   "date_posted": "01/03/2022", 
    //   "term": "1 day",
    //   "expiration": "01/26/2022"
    //   },
    //   {
    //     "id": 2,
    //     "title": "Dancer",
    //     "description": "B-boy style. Must have several years' experience in boy band and be young and handsome. Some domestic and international travel may be necessary.",
    //     "location": "Guangzhou",
    //     "rate": "$20",
    //     "date_posted": "01/04/2022", 
    //     "term": "2 months",
    //     "expiration": "01/23/2022"
    //     },
    //     {
    //       "id": 3,
    //       "title": "Voice actress",
    //       "description": "Needs British accent, female preferred",
    //       "location": "Beijing",
    //       "rate": "$50",
    //       "date_posted": "01/07/2022", 
    //       "term": "4 weeks",
    //       "expiration": "02/01/2022"
    //       },
          
    // ]
  },

  goToShowTalent: function(e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/talent_show/talent_show?id=${id}`,
    })
  },

  onLoad: function (options) {
    // comment this back when resolved jbuilder issue -AM 1-10-2022

    const page = this
    wx.request({
      url: 'http://localhost:3000/api/v1/users',
      success: res => {
        console.log("here's the user data ->", res)
        page.setData(res.data)
      }
    })
  },

  // onLoad: function (options) {
  //   const page = this
  //   wx.request({
  //     url: 'http://localhost:3000/api/v1/gigs',
  //     success: res => {
  //       console.log(res)
  //       page.setData(res.data)
  //     }
  //   })
  // },

    //     console.log(res)
    //     page.setData(res.data)
    //   }
    // })


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