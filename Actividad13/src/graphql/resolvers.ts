//Se realiza la importación de datos
import {db} from "./data";

//Se declara la interfaz WeatherInterface para los parámetros
//que recibirán los resolvers.
declare interface WeatherInterface{
    zip:string;
    weather:string;
    tempC:string;
    tempF:string;
    friends:string[];
}

//Se exportan los resolvers
export const resolvers={
    //Este resolver será de consulta
    Query:{
        weather:async (_:any,param:WeatherInterface)=>{
            return [db.find((item)=>item.zip===param.zip)];
        }
    },
    //Se crea el resolver de mutación
    Mutation:{
        weather:async (_:any,param:{data:WeatherInterface})=>{
            return [db.find((item)=>item.zip===param.data.zip)];
        }
    } 
}
