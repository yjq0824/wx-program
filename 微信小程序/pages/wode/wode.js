var app = getApp();

Page({
  	data: {
  		canIUse: wx.canIUse('button.open-type.getUserInfo'),
      mode: ['我的收藏','我的订单','我的地址','联系客服','关于我们']
  	},
  
    onLoad: function() {
      // 查看是否授权
      wx.getSetting({
        success (res){
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      })
    },
    bindGetUserInfo (e) {
      console.log(e.detail.userInfo)
    }
})