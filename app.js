const lajiData = require("./asserts/datas/laji.js")

App({
  onLaunch: function() {
    console.log("launch...")
  },
  globalData: {
    datas: lajiData.datas
  }
})