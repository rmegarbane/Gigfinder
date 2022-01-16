// pages/index/index.js
Page({

  data: {
    currentTab: "talent"
  },

goToTalentList: function (e) {
  wx.navigateTo({
    url: `/pages/talent_list/talent_list`,
  })
},

  goToShowGig: function (e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/gig_show/gig_show?id=${id}`,
    })
  },

  goToShowTalent: function(e) {
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/talent_show/talent_show?id=${id}`,
    })
  },

  switchTab: function (e) {
    const page = this
    console.log(e.currentTarget.dataset)
    console.log("Here", e)
    const tab = e.currentTarget.dataset.tab
    this.setData({currentTab: tab})
    if (tab==='talent') {
    this.fetchTalents()
    }
    else {
      this.fetchGigs()
    }
    // wx.navigateTo({
    //   url: `/pages/gig_list/gig_list?id=${id}`,
    // })
  },

  fetchTalents: function (query= null) {
    const page= this
    wx.request({
      header: wx.getStorageSync('headers'),
      
      url: `http://localhost:3000/api/v1/users${query? '?query=' + query :''}`,

      success: res => {
        console.log(res)
        page.setData(res.data)
      }
    })
  },

  fetchGigs: function (query= null) {
    const page= this
    wx.request({
      header: wx.getStorageSync('headers'),
      
      url: `http://localhost:3000/api/v1/gigs${query? '?query=' + query :''}`,

      success: res => {
        console.log(res)
        page.setData(res.data)
      }
    })
  },

 
  onShow: function () {
    const page = this
    this.setData({currentTab: 'talent'})
    wx.request({
      header: wx.getStorageSync('headers'),
      
      url: 'http://localhost:3000/api/v1/users',

      success: res => {
        console.log(res)
        page.setData(res.data)
      }
    })
    
  },

  onSearchInput: function (e) {
    this.setData({query: e.detail.value})
  },

  search: function (e) {
    const query= this.data.query
    if (this.data.currentTab== 'talent') {
      this.fetchTalents(query)
    }
    else {
      this.fetchGigs(query)
    }

  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  // onShow: function () {

  // },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
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

    const order = ['demo1', 'demo2', 'demo3']

    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },

  data: {
    toView: 'green'
  },

  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  
})