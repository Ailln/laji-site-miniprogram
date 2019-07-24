const app = getApp();

Page({
  data: {
    datas: []
  },

  onLoad: function () {
    const that = this;
    that.setData({
      datas: app.globalData.datas
    })
  },
})