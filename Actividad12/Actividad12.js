const express=require("express");
const app=express();
const port=3000;


//Rutas estáticas
app.get("/prueba",(req,res)=>{
    res.json({message:"Hola desde '/prueba'"})
})

//Rutas dinámicas
app.get("/prueba/:nombre",(req,res)=>{
    //Para acceder al parámetro de la ruta, se debe usar req.params
    //Uso desestructuración para obtener el parámetro de ruta del objeto params
    const {nombre} =req.params;
    res.send(`<h1>Hola, ${nombre}</h1>`);
})

//Parámetros opcionales
app.get("/opcional/:id?",(req,res)=>{
    //Como el parámetro de ruta es opcional, usaré el condicional "if" para verificar
    //si hay, o no, un valor
    const {id}=req.params;
    if (id){
        return res.send(`Tu id es ${id}`);
    }
    else{
        return res.send("No ingresaste el ID");
    }
})

//Parámetros de consulta
app.get("/movies",(req,res)=>{
    //Para acceder a los parámetros de consulta, se debe usar req.query
    const {id,año}=req.query;
    res.send(`Película de id ${id} fue released en ${año}`);
})


//Gestión de encabezados
app.get("/headers",(req,res)=>{
    //Acá establezco que el tipo de contenido que el servidor envía al
    //cliente será "text/html".
    res.set("Content-Type","text/html");
    res.send("<h1>Holaaa</h1>");
})


//Redirecciones
app.get("/redireccion",(req,res)=>{
    //Por parámetro estoy pasando una ruta relativa, de tal forma que
    //cada que se realice una solicitud get al endpoint "/redireccion"
    //se redirija a "/prueba"
    res.redirect("/prueba");
})

//Código de estado y encadenamiento de métodos:
app.get('/encad', (req, res, next) => { 
    res.status(200).set('Content-Type', 'text/html').send("<h1>Holaaa</h1>"); 
})

//Para ello, uso el middleware que se encargará de procesar correctamente
//el tipo de dato que se usa cuando se envía datos mediante un formulario html
app.use(express.urlencoded());

//Enviando un archivo html desde express con sendFile
app.get("/enviar_archivo",(req,res)=>{
    //Uso __dirname para obtener la ruta del directorio actual, añadiéndole el nombre del archivo a enviar
    res.sendFile(__dirname+"/index.html");
})
//Establezco la ruta que recibirá el dato enviado mediante el formulario
app.post("/saludar",(req,res)=>{
    //Al ser un método "post", obtengo el dato enviado
    //mediante el formulario mediante el body de la solicitud
    const {nombre}=req.body;

    //Establezco el tipo de respuesta y la respuesta del servidor
    //una vez que haya obtenido los datos del formulario
    res.set("Conte-Type","text/html");
    res.send(`<h1>Hola, ${nombre}</h1>`);    
})


app.listen(port,()=>{
    console.log(`Puerto ${port} en escucha`);
})
