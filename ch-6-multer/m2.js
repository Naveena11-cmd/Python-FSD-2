var express=require("express")
var app=express();
var m=require("multer");
app.use(express.static(__dirname,{index:"m2.html"}))
var store=m.diskStorage({destination:"my",filename:(req,file,cb)=>
{
    cb(null,file.originalname)
    console.log(file)
}})
var upload=m({storage:store, limits:{fileSize:1024*1024*10}})
app.post("/upload",upload.array("mydoc",3),(req,res)=>{  //3 is the max number of files user can upload
    var file=req.files;
    console.log(file);
    if(file)
    {
        res.type("text/html")
       for (f of file)
       {
        res.write(`<h1> File ${f.originalname} has been uploaded </h1>`)
      
       }
    }
    res.send()
})
app.listen(7006)
