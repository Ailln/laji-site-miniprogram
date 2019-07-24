const app = getApp();

Page({
  data: {
    index: 0,
    datas: []
  },

  onLoad: function (o) {
    const that = this;
    that.setData({
      datas: app.globalData.datas,
      index: o.index
    })
  },
})
