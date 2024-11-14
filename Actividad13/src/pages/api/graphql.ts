//Se importan los archivos necesarios para crear el endpoint de GraphQL
//Esto incluye el esquema GraphQL, así como los resolvers, que se crearon anteriormente.
import {ApolloServer} from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next";
import {resolvers} from "../../graphql/resolvers";
import {typeDefs} from "../../graphql/schema";
import {NextApiHandler,NextApiRequest,NextApiResponse} from "next";

//Se inicia el servidor
//@ts-ignore
const server=new ApolloServer({
    resolvers,
    typeDefs
});

//Se crea el manejador de la API
const handler=startServerAndCreateNextHandler(server);

//Se crea un wrapper o envoltorio para agregar los encabezados CORS
const allowCors=
(fn:NextApiHandler)=>async(req:NextApiRequest,res:NextApiResponse)=>{
    res.setHeader("Allow","POST");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","POST");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Credentials","true");

    //Se devuelve 200 con los encabezados CORS.
    if (req.method==="OPTIONS"){
        res.status(200).end();
    }
    return await fn(req,res);
}

export default allowCors(handler);
