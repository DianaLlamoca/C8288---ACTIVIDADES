import type {NextPage} from "next";

import React, {useState,useEffect} from "react";

const PagecomponentWeather:NextPage=()=>{
    //Esta interfaz definirá la estructura de las props del componente WeatherComponent
    interface WeatherProps{
        weather:string;
    }

    //Se crea el componente Weather
    const WeatherComponent=(props:WeatherProps)=>{
        //Se crea una variable "count" inicialmente en 0, que será
        //luego actualizada mediante "setCount"
        const [count,setCount]=useState(0);

        //La página, al renderizarse por primera vez, establece "count" a 1
        useEffect(()=>{
            setCount(1);
        },[]);

        return(
            <h1 onClick={()=>setCount(count+1)}>
                El clima es {props.weather},
                Y el contador muestra {count}
            </h1>
        );
    };
    //Acá se está realizando un return del componente creado anteriormente
    //donde se le está pasando la prop "weather", pues
    //así se definió en la interfaz
    return (<WeatherComponent weather="sunny"/>)
}
//Se exporta el componente para que pueda ser utilizado en otras páginas
export default PagecomponentWeather;
