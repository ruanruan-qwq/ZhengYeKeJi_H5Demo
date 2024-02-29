// custom-tab-bar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#015C61",
    list: [
    {
      pagePath: "/pages/work/work",
      iconPath: "/images/home.png",
      selectedIconPath: "/images/home_light.png",
      text: "工作"
    }, 
    {
      pagePath: "/pages/assistant/assistant",
      iconPath: "/images/home.png",
      selectedIconPath: "/images/home_light.png",
      text: "助手"
    }, 
    {
      pagePath: "/pages/add/add",
      iconPath: "/images/add.png",
      selectedIconPath: "/images/search_light.png",
      text: "常用",
      isSpecial: true
    }, 
    {
      pagePath: "/pages/analyze/analyze",
      iconPath: "/images/home.png",
      selectedIconPath: "/images/home_light.png",
      text: "分析"
    }, 
    {
      pagePath: "/pages/mine/mine",
      iconPath: "/images/my.png",
      selectedIconPath: "/images/my_light.png",
      text: "我"
    }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data)
      if (!data.click) {
        const url = data.path
        wx.switchTab({url})
        this.setData({
          selected: data.index
        })
      } else {
        wx.scanCode({
          onlyFromCamera: true,
          success (res) {
            console.log(res)
          },
          fail (err) {
            console.log(err)
            wx.showToast({
              title: '扫码失败',
              icon: 'loading',
              duration: 1500
           })
          }
        })
      }
    }
  }
})