import {Schema} from "mongoose";
//Se importa la interface creada anteriormente, pues servirá para tipar el esquema
import {WeatherInterface} from "./interface";

//Acá es donde se usa la interfaz para el schema.
//Los campos acá son obligatorios, por ello se coloca "required":true
export const WeatherSchema=new Schema<WeatherInterface>({
    zip:{
        type:"String",
        required:true,
    },
    weather:{
        type:"String",
        required:true,
    },
    tempC:{
        type:"String",
        required:true,
    },
    tempF:{
        type:"String",
        required:true,
    },
    friends:{
        type:["String"],
        required:true,
    },
});

//Es importante notar que como la API meteorológica que se creó antes
//devolvía un objeto con 4 propiedades: zip, weather, tempC, tempF, donde cada
//una es una cadena. Por otra parte, el array de cadenas en la propiedad
//"friends" está presenta en el esquema. Es importante definirlo aquí también.
