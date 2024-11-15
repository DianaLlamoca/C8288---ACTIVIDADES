import {WeatherInterface} from "../../mongoose/weather/interface";
import {findByZip,updateByZip} from "../../mongoose/weather/services";

//Se exportan los resolvers
//Acá la modificación es que se reemplazó la funcionalidad del "array.filter".

export const resolvers={
    //Este resolver será de consulta
    //Para consultar los datos, se usa el servicio "findByZip" y se le pasa la variable "zip"
    //del payload de la solicitud. Luego devuelve los datos en un array.
    Query:{
        weather:async (_:any,param:WeatherInterface)=>{
            let data=await findByZip(param.zip);
            return [data];
        }
    },
    //Se crea el resolver de mutación
    //Para la mutación, se usa el servicio updateByZip.
    //La mutación "weather" devuelve el conjunto de datos actualizado.
    Mutation:{
        weather:async (_:any,param:{data:WeatherInterface})=>{
            await updateByZip(param.data.zip,param.data);
            let data=await findByZip(param.data.zip);
            return [data];
        }
    } 
}
