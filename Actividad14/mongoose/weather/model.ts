//Se importa el módulo mongoose y el constructor del modelo
//Además, se importa la interfaz y el esquema que se crearon anteriormente
import mongoose, {model} from "mongoose";
import {WeatherInterface} from "./interface";
import {WeatherSchema} from "./schema";

//Se configura el modelo Weather utilizando la interfaz creada anteriormente
//para tiparlo y se exporta para que se pueda usar
export default mongoose.models.Weather ||
    //Acá se pasan dos parámetros, el primero será el nombre del
    //modelo y el segundo será el esquema, que va a definir la estructura interna de datos del modelo
    model<WeatherInterface>("Weather",WeatherSchema);
