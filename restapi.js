'use strict'
var express=require("express");
var bodyparser=require("body-parser")
var app=express();
var mongoose=require('./mongoose')
var port=process.env.PORT||3000;
app.use(bodyparser.urlencoded({extended:true}))
app.listen(port,()=>{console.log("listen started")})
app.get("/get",(req,res)=>{
	console.log("About the page")
	res.send("get requested")
})
app.post("/post",(req,res)=>{
		var name=JSON.stringify(req.body.name);

	var tasks=new mongoose({name:req.body.name})
	tasks.save((err)=>{
		if(err)
			console.error(err.message)
	})
	db.colllections("tasks").insert({name:"guna sekhar"},(err,result)=>{
		if (err) {
			console.log(err);
		}
		res.send("result"+result)
	})
	console.log(req.body.name)
	res.send(name+"Post request")
})
