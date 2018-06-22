const express=require('express');
const cookieParser=require('cookie-parser');

var server=express();

//cookie空间小，cookie加密
server.use(cookieParser('fjaklsf'));

server.use('/',function(req,res){
	
	res.cookie('user','zbd',{signed:true});  //签名浪费空间
	
	console.log('签名cookie:',req.signedCookies);
	console.log('无签名cookie:',req.cookies);
//清除cookie：res.clearCookie('cookie名');
	res.send('ok');
});

server.listen(8080); 