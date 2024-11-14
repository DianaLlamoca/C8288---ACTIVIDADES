import gql from "graphql-tag";


//Se definen los tipos que describirán la información
//de las consultas o las respuesta a las consultas.

//Se emplea el objeto de tipo "input" para la mutación 
//Así como el tipo "Query" para definir las funciones de consulta
export const typeDefs=gql`
    type LocationWeatherType{
        zip:String!
        weather:String!
        tempC:String!
        tempF:String!
        friends:[String]!
    }

    input LocationWeatherInput{
        zip:String!
        weather:String
        tempC:String
        tempF:String
        friends:[String]
    }

    type Query{
        weather(zip:String):[LocationWeatherType]!
    }

    type Mutation{
        weather(data:LocationWeatherInput):[LocationWeatherType]!
    }
`;
