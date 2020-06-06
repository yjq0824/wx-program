  

             

Page({

    data: {
        arr:[
            {
                cakename:'',
                cakeprice:'',
                itemUrl:'',

            }
        ],


        // arr:[
        //     {
        //         'cakename':cakeinfo.cakename,
        //         'cakeprice':cakeinfo.cakeprice,
        //         'itemUrl':cakeinfo.itemUrl
        //     },
        // ],
       
        
    },

    collect: function(){
        this.setData({
            iscollect: !this.data.iscollect
        })
        console.log(this.data.iscollect);
    },

    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },

    addcake:function(){
        var cakename=this.data.cakename;
        var cakeprice=this.data.cakeprice;
        var itemUrl=this.data.itemUrl;
        wx.setStorageSync('addcakename', cakename);
        wx.setStorageSync('addcakeprice',cakeprice);
        wx.setStorageSync('additemUrl',itemUrl);
        var testcakename=wx.getStorageSync('addcakename');
        var testcakeprice= wx.getStorageSync('addcakeprice');
        var testcakeitemUrl=wx.getStorageSync('additemUrl');

        console.log("addcakename:"+testcakename);
        console.log("addcakeprice:"+testcakeprice);
        console.log("additemUrl:"+testcakeitemUrl);
        wx.showToast({
            title: '加入成功',
            icon: 'success',
            duration: 2000,
            
      }),
      wx.reLaunch({
        url: '../shoppingcar/shoppingcar',
      })
    },
    onLoad(){
             let cakename = wx.getStorageSync('cakename');
             let cakeprice = wx.getStorageSync('cakeprice');
             let itemUrl= wx.getStorageSync('itemUrl');
             console.log("cakename:"+cakename);
             console.log("cakeprice:"+cakeprice);
             console.log("itemUrl:"+itemUrl);
             var cakeinfo={};
             cakeinfo.cakename=cakename;
             cakeinfo.cakeprice=cakeprice;
             cakeinfo.itemUrl=itemUrl;
             console.log("cakeinfo.cakename:"+cakeinfo.cakename);
             console.log("cakeinfo.cakeprice:"+cakeinfo.cakeprice);
             console.log("cakeinfo.itemUrl:"+cakeinfo.itemUrl);
             this.setData({cakename:cakeinfo.cakename}),
             this.setData({cakeprice:cakeinfo.cakeprice}),
             this.setData({itemUrl:cakeinfo.itemUrl})

    }


})