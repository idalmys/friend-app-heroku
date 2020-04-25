const express= require("express");


//Run express
const app= express();

//Settings
var PORT = process.env.PORT || 8080;


//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(require("./app/routes/htmlRoutes"));
app.use(require("./app/routes/apiRoutes"))

//Public contains static elements (images,css and html)
app.use(express.static("app/public"));

//Start server
app.listen(PORT,()=>{
    console.log("Server started on "+ PORT);
})