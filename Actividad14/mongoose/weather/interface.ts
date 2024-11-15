//Se declara la interfaz para tipar el esquema
export declare interface WeatherInterface{
    zip:string;
    weather:string;
    tempC:string;
    tempF:string;
    friends:string[];
};

//Notar que las propiedades coinciden con los esquemas de GraphQL y mongoose, ya
//que se conectará la API GraphQL a la base de datos.
 
