import WeatherModel from "./model";
import {WeatherInterface} from "./interface";

//Para almacenar un documento, se crea y exporta la función async storeDocument
//Esta función toma el conjunto de datos como argumento. Y se tipará como WeatherInterface.
export async function storeDocument(doc:WeatherInterface):Promise<boolean>{
    try{
        //Se usa la función "create" en el modelo y se le pasa el conjunto de datos
        //Esta función creará e insertará el modelo en WeatherModel
        await WeatherModel.create(doc);
    }catch(error){
        return false;
    }
    //Acá se devuelve un booleano para indicar el estado de la operación
    return true;
}

//Leer un documento
//Se define una función findByZip para encontrar y devolver
//el primer documento de la colección Weathers donde la propiedad "zip" coincida con
//el zipcode pasado a la función como parámetro
export async function findByZip(
    paramZip:string
):Promise<Array<WeatherInterface> | null>{
    try{
        //Se usa la función findOne para buscar el documento cuyo campo zip
        //coincida con el valor del parámetro
        return await WeatherModel.findOne({zip:paramZip});
    }catch(err){
        console.log(err);
    }
    return [];
}
//Aquí la función toma como parámetro una cadena, el código postal
//y devuelve ya sea un array de documentos o un array vacío.


//Actualizar un documento
//La función updateByZip toma 2 parámetros. El primero es una cadena
//que representa el zipcode que se usó para consultar el documento que se va a actualizar.
//El segundo es el nuevo conjunto de datos, que será tipificado como WeatherInterface.
export async function updateByZip(
    paramZip:string,
    newData:WeatherInterface
):Promise<boolean>{
    try{
        //Se llama a la función updateOne de mongoose en el modelo,
        //pasándole un objeto de filtro y los últimos datos
        await WeatherModel.updateOne({zip:paramZip},newData);
        return true;
    }catch(err){
        console.log(err);
    }
    //La función devuelve un booleano para indicar el estado
    return false;
}

//Eliminar un documento
export async function deleteByZip(
    paramZip:string
):Promise<boolean>{
    try{
        //La función deleteByZip  toma un parámetro de cadena zip.
        await WeatherModel.deleteOne({zip:paramZip});
        return true;
    }catch(err){
        console.log(err);
    }
    return false;
}

