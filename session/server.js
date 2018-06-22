const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

var server=express();

//session
var arr=[];

for(var i=0;i<100000;i++){
	arr.push('sig_'+Math.random());
}

server.use(cookieParser());//解析cookie
server.use(cookieSession({
	name:'sess',//名字
	keys:arr,//签名
	maxAge:2*1000//有效期
}));

server.use('/',function(req,res){
	if(req.session['count']==null){
		req.session['count']=1;
	}else{
		req.session['count']++;
	}
	
	console.log(req.session['count']);
	
	delete req.session;//删除session
	
	res.send('ok');
});

server.listen(8080);