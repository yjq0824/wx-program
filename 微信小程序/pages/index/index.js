var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();


Page({
    data: {
        imgUrls: [//轮播图图片
            '../../image/slider-1.jpg',
            '../../image/slider-2.jpg',
            '../../image/slider-3.jpg'
        ],
        indicatorDots: true,//轮播图的指示点开关
        vertical: false,//垂直
        autoplay: true,//自动播放
        interval: 3000,//间隔
        duration: 1200,//持续时间
        iconArray: [//小图标数组
            {
                "iconUrl": '../../image/icon-qiandao.png',
                "iconText": '签到'
            },
            {
                "iconUrl": '../../image/icon-fujin.png',
                "iconText": '附近'
            },
            {
                "iconUrl": '../../image/icon-zhanhui.png',
                "iconText": '游展'
            },
            {
                "iconUrl": '../../image/icon-fuli.png',
                "iconText": '福利'
            },
            {
                "iconUrl": '../../image/icon-muma.png',
                "iconText": '玩乐'
            },
            {
                "iconUrl": '../../image/icon-xingxing.png',
                "iconText": '周边'
            },
            {
                "iconUrl": '../../image/icon-tiyu.png',
                "iconText": '体育'
            },
            {
                "iconUrl": '../../image/icon-qinzi.png',
                "iconText": '亲子'
            }
        ],
        itemArray: [
            {
                "cakename":'草莓蛋糕',
                "cakeprice":'88',
                "itemUrl": '../../image/item-1.jpg',
                "itemText": '5.1!新品上市！'
            },
            {
                "cakename":'黑糖巧克力蛋糕',
                "cakeprice":'99',
                "itemUrl": '../../image/item-2.jpg',
                "itemText": '火爆销量！'
            },
            {
                "cakename":'慕斯蛋糕',
                "cakeprice":77,
          
                "itemUrl": '../../image/item-3.jpg',
                "itemText": '味美价廉！'
            },
          ],

        
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },
    buycake:function(options){
        let cakename = options.currentTarget.dataset.cakename
        let cakeprice = options.currentTarget.dataset.cakeprice
        let itemUrl = options.currentTarget.dataset.itemurl

        // console.log(cakename);
        // console.log(cakeprice);
        // console.log(itemUrl);
        wx.removeStorageSync('cakename');
        wx.removeStorageSync('cakeprice');
        wx.removeStorageSync('itemUrl');

        wx.setStorageSync('cakename', cakename);
        wx.setStorageSync('cakeprice', cakeprice);
        wx.setStorageSync('itemUrl', itemUrl);

        wx.navigateTo({
          url: '../spdetail/spdetail',
        })

    }

})