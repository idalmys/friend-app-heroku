const express= require("express");


//Run express
const app= express();

//Settings
app.set("Port", process.env.Port || 8080);

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(require("./app/routes/htmlRoutes"));
app.use(require("./app/routes/apiRoutes"))

//Public contains static elements (images,css and html)
app.use(express.static("app/public"));

//Start server
app.listen(app.get("Port"),()=>{
    console.log("Server started on "+ app.get("Port"));
})