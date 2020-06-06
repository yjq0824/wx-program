Page({
  data:{
    cakename:'',
    cakeprice:'',
    cakeNum:''
  },
  


onLoad: function (options) {       //options用于接收上个页面传递过来的参数
  var that=this;
    that.setData({                             //this.setData的方法用于把传递过来的id转化成小程序模板语言
        b_cakename: options.cakename,     //id是a页面传递过来的名称，a_id是保存在本页面的全局变量   {{b_id}}方法使用
        b_cakeprice: options.cakeprice,
        b_carNum:options.carNum,
    })

    console.log("b_cakename:"+b_cakename);
    console.log("b_cakeprice:"+b_cakeprice);
    console.log("b_carNum:"+b_carNum);
},
})