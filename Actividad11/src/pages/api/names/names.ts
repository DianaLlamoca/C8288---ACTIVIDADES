//Importo los tipos necesarios para manejar las solicitudes como las respuestas
import type {NextApiRequest,NextApiResponse} from "next";

type responseItemType={
    id:string;
    name:string;
};

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
):Promise<NextApiResponse<responseItemType[]>|void>{
    const url="https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try{
        //Se realiza una solicitud GET a la url especificada
        const response=await fetch(url);

        //Se obtiene la respuesta en formato json y se usa aserción de tipos para que sea del tipo indicado
        data=(await response.json()) as responseItemType[];
    }
    //En caso haya un error al realizarse la solicitud, se manda el código de estado 500 como respuesta
    catch(err){
        return res.status(500);
    }
    //Si no hubo error, se almacenan los datos en un arreglo de objetos
    const names=data.map((item)=>{
        return {id:item.id,name:item.name};
    });
    //Se envía la respuesta de que la solicitud pudo procesarse y se envían los datos al cliente
    return res.status(200).json(names);
}
