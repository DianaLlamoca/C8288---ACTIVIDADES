import type {NextApiRequest,NextApiResponse} from "next";

type WeatherDetailType={
    zipcode:string;
    weather:string;
    temp?:number;
}

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
):Promise<NextApiResponse<WeatherDetailType>|void>{
    return res.status(200).json({
        //En routes, NextJS agrupa, ya sean parámetros de ruta o de consulta en "query"
        //Se accede al zipcode mediante .query.zipcde, ya que query es un objeto
        zipcode:req.query.zipcode,
        weather:"sunny",
        temp:35
    });
}
