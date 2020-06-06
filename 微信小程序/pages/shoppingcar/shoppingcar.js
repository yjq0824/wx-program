// var arr=[];

// let cakename = wx.getStorageSync('addcakename');
// let cakeprice = wx.getStorageSync('addcakeprice');
// let itemUrl= wx.getStorageSync('additemUrl');
// console.log("addcakename:"+addcakename);
// console.log("addcakeprice:"+addcakeprice);
// console.log("additemUrl:"+additemUrl);

// var addcakeinfo={
// 	addcakename=addcakename,
// 	addcakeprice=addcakeprice,
// 	additemUrl=additemUrl,
// 	carNum=1

// };


// arr.push(addcakeinfo);

// console.log("arr的值为:"+arr);

Page({
  	data: {
			carArray:[
				{
					cakename:'',
					cakeprice:'',
					itemUrl:'',
					carNum:'',
				},
				
			] 
			
  	},
  	carAdd: function(event){
			var carNum=this.data.carNum;
			console.log("carNum:"+carNum);
			var con=carNum + 1;
			console.log("con:"+con);
			this.setData({carNum:con});
  		// var that = this;
  		// var index = 0;
  		// var con = that.data.carArray.carNum + 1;
  		// this.setData({carNum:con});
  	},
  	carReduce: function(event){
			var carNum=this.data.carNum;
			console.log("carNum:"+carNum);
			if(carNum<=1){
				carNum=1;
				this.setData({carNum:1});
			}else{
				carNum--;
				this.setData({carNum:carNum});

			}
  		// var that = this;
  		// var index = 0;
  		// var con = that.data.carArray[index].carNum;
  		// var key = 'carArray['+index+'].carNum';
  		// var obj = {};
  		// if(con <= 1){
  		// 	obj[key] = 1;
  		// 	that.setData(obj);
  		// }
  		// else {
  		// 	con--;
  		// 	obj[key] = con;
  		// 	that.setData(obj);
  		// }
  	},
  	// carRemove: function(event){
  	// 	var that = this;
  	// 	var index = 0;
  	// 	var key = 'carArray['+index+'].carShow';
  	// 	var obj = {};
  	// 	obj[key] = false;
  	// 	this.setData(obj);
  	// },
    toPay: function(){
			var cakename=this.data.cakename;
			var cakeprice =this.data.cakeprice;
			var carNum = this.data.carNum;
        wx.navigateTo({
          url: '../pay/pay?cakename='+cakename+'&cakeprice='+cakeprice+'&carNum='+carNum+''
        })
		},
		// addcake:function(){
			
		// },
		onLoad(){
			let cakename = wx.getStorageSync('addcakename');
			let cakeprice = wx.getStorageSync('addcakeprice');
			let itemUrl= wx.getStorageSync('additemUrl');
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
			this.setData({itemUrl:cakeinfo.itemUrl}),
			this.setData({carNum:1})

}

})