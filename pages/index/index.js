const app = getApp();

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    queryList: [],
    hotList: [{
        value: "前女友",
        class: 0
      },
      {
        value: "前男友",
        class: 0
      },
      {
        value: "蛋壳",
        class: 2
      },
      {
        value: "毛巾",
        class: 3
      }
    ],
    datas: [],
    dataCount: 0
  },
  onLoad() {
    const that = this;
    const allData = app.globalData.datas;
    let count = 0;
    allData.forEach((item) => {
      count += item.dataList.length;
    })
    that.setData({
      datas: allData,
      dataCount: count
    })
  },
  showInput: function() {
    const that = this;
    that.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    const that = this;
    that.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    const that = this;
    that.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    const that = this;
    const searchKey = e.detail.value;

    that.setData({
      inputVal: searchKey,
      queryList: that.fuzzyQuery(searchKey),
    })
  },
  fuzzyQuery: function(key) {
    let results = [];
    for (let i = 0; i < this.data.datas.length; i++) {
      let items = this.data.datas[i].dataList
      for (let j = 0; j < items.length; j++) {
        if (items[j].indexOf(key) >= 0) {
          results.push({
            "value": items[j],
            "class": i
          });
        }
      }
    }
    return results;
  },
  openConfirm: function(e) {
    const that = this;
    const item = e.currentTarget.dataset.item;
    wx.showModal({
      title: item.value + "是「" + that.data.datas[item.class].name + "」",
      content: that.data.datas[item.class].introduction,
      confirmText: "完成",
      cancelText: "查看更多",
      success: function(res) {
        if (res.confirm) {
          console.log("确定");
        } else {
          wx.navigateTo({
            url: '../sortKnowledgeInfo/sortKnowledgeInfo?index=' + item.class,
          })
        }
      }
    });
  },
  toKnowledege: function() {
    wx.switchTab({
      url: "../knowledge/knowledge"
    })
  }
});