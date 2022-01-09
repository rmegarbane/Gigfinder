
App({
  onLaunch() {
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        console.log("response =", res)
        wx.request({
          url: `${getApp().globalData.url}/login`,
          method: 'POST',
          data: {code: res.code},
          success: (res)=> {
            const user = res.data.currentUser
            console.log("res", res)
            getApp().globalData.user = user 
            wx.setStorageSync('user', user)
          }
        })
      }
    })
  },

 
  //   gigs: [
  //     {title: "Juggler", description: "Performer with the ability to juggle", location: "Shanghai", rate: "$300", date_posted: "01/03/2022", term: "1 day", expiration: "01/26/2022" }
  //   ],
 globalData: {
    userInfo: null,
    // LOCAL HOST IS FOR LOCAL RAILS S. NOT PRODUCTION
   url: "http://localhost:3000/api/v1",
    // PRODUCTION API (MAY NOT HAVE ALL THE LATEST CHANGES & UPDATES FROM BACKEND)
  //  url: "http://gig-finder-api.wogengapp.cn/api/v1"
  },

    globalData: {
      users: [
        {
          "id": 1, 
          "name": "edubro",
          "image": "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
          "rate": "250/hr",
          "description": "I am awesome, bro"
        },
        {
          "id": 2, 
          "name": "prettygurl",
          "image": "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          "rate": "130/hr",
          "description": "I am so fashion"
        }
      ],

    gigs: [
      {
      "id": 1,
      "title": "Juggler",
      "description": "Performer with the ability to juggle",
      "location": "Shanghai",
      "rate": "$300",
      "date_posted": "01/03/2022", 
      "term": "1 day",
      "expiration": "01/26/2022"
      },
      {
        "id": 2,
        "title": "Dancer",
        "description": "B-boy style. Must have several years' experience in boy band and be young and handsome. Some domestic and international travel may be necessary.",
        "location": "Guangzhou",
        "rate": "$20",
        "date_posted": "01/04/2022", 
        "term": "2 months",
        "expiration": "01/23/2022"
        },
        {
          "id": 3,
          "title": "Voice actress",
          "description": "Needs British accent, female preferred",
          "location": "Beijing",
          "rate": "$50",
          "date_posted": "01/07/2022", 
          "term": "4 weeks",
          "expiration": "02/01/2022"
          }
    ]
  }
})
