//  ========== 
//  = webpack 配置 = 
//  ========== 
var webpack=require("webpack");
module.exports={
	entry:[
		details:"./app/scripts/details.js",
		home:"./app/scripts/home.js"
	],
	output:{
		path:"/ordorapp/app/scripts",
		filename:"all.js"
	}
//	,
//	loaders:[
//		{test:/\.js?$/,loaders:["babel-loader"]}
//	]
//	,
//	resolve:{
//		alias:{
//			
//		}
//	}
};
