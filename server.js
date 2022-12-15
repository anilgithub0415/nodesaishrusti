var express=require('express');
var app=express();




const port=process.env.port||3002;

var cors=require('cors');
const bodyparser=require('body-parser');

app.use('*',cors());

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


//-------------------------
TestC=require('./Controllers/Test/Test');
app.use('/api/Test',TestC);

//-------------------------


/* */
app.get('/', (req, res) => {
   res.sendStatus(200);
 })
app.listen(port,function(){
   var msg='Node TestHost server m App from E:\myapt\appsimple running at port:'+port;
   console.log(msg);

   
}); 


