const express=require("express");
const app=express();
const port=3000;

//Aplicando la plantilla al servidor
app.set("view engine","ejs");

//Se renderiza la plantilla en el endpoint principal "/" 
app.get("/",(req,res)=>{
    res.render("index",{
        title:"Este es un app de Express",
        subtitle:"usando EJS como plantilla"
    })
})



app.listen(port,()=>{
    console.log(`App corriendo en http://localhost:${port}`);
})
