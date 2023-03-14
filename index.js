 
const express=require("express");
const port=process.env.PORT || 9800;
const con=require('./config')
const app=express()
app.use(express.json())
app.get("/",(req,resp)=>{
 
    con.query("select * from products ",(err,result)=>{
        if(err==null){
         resp.send(result);  
        }
      }) 
})

app.post("/",(req,resp)=>{
 const data=req.body;
    con.query("INSERT INTO products SET ?",data,(err,result)=>{
        if(err==null){
         resp.send(result);  
        }
      }) 
})

app.put("/:no",(req,resp)=>{
    const data=[req.body.name,req.body.description,req.body.price,req.body.category,req.body.image,req.params.no];
       con.query("UPDATE products set name= ?,description=?,price=?,category=? image==? WHERE no=?",data,(err,result)=>{
           if(err==null){
            resp.send(result);  
           }
         }) 
   })

   app.delete("/:no",(req,resp)=>{
    
       con.query("delete from products   WHERE no=",req.params.no,(err,result)=>{
           if(err==null){
            resp.send(result);  
           }
         }) 
   })

app.listen(port,()=>{
    console.log("sever is runing "+port)
})


 