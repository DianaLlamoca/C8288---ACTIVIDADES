# Creando el schema:
Se crea el directorio graphql, y allí se define el schema:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A13_1.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A13_2.JPG)

*Dentro del schema, se están definiendo los tipos de objetos que representan los datos que devuelve la API.

*Hay un tipo de objeto personalizado "LocationWeatherType", que describe la información de ubicación para la consulta meteorológica. Dentro de este tipo de objeto se coloca el signo "!" para indicar que son campos obligatorios. De tal forma que GraphQL siempre devolverá un valor para dichos campos.

*Se define, por otra parte, el objeto de tipo "input", que servirá para realizar la mutación.
Este tipo "input" es necesario, ya que representa la entrada recibida. Y devolverá un arreglo de objetos definidos mediante el tipo "LocationWeatherType".

*Además, se define la función de consulta mediante el tipo type Query.
La consulta "weather" toma el código postal como parámetro y devolverá un array de objetos definidos mediante el tipo "LocationWeatherType".


=====

# Agregando datos

Para realizar las consultas y que la API devuelva datos dependiendo de las parámetros y propiedades, se agregarán
datos JSON estáticos. Para ello, se crea el archivo data.ts y se añaden los datos:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A13_3.JPG)

=====

# Implementando resolvers

Los resolvers son funciones que implementan el esquema. Debido a que en el esquema se han definido los tipos de
objetos específicos tanto para realizar consultas como para devolver valores (consultas y mutaciones, respectivamente),
cada función resolver se asignará a un campo. De tal manera que los resolvers de consulta se encarguen de realizar la lectura
de datos (similar al método GET en REST), mientras que los resolvers de mutación implementarán las funcionalidades CRUD (similares
a las operaciónes POST,PUT,DELETE,etc...)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A13_4.JPG)

Aquí, el resolver de consulta encontrará un objeto utilizando el código postal enviado por parámetro.
Mientras que la mutación si bien hace lo mismo, a excepción de la estructura del parámetro, pues será accesible
a través de la propiedad "data".

======

# Creando la ruta de la API

A diferencia de REST, GraphQL expone un único endpoint: "graphql/".
Para ello, se debe crear un archivo dentro de la carpeta "api" para que el servidor Apollo GraphQL pueda exponer dicho endpoint.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A13_5.JPG)

Luego, se crea un archivo donde se importarán los módulos necesarios, que incluyen el esquema
y los resolvers.

Se inicia el servidor y se crea el manejador de la API. Para ello, se emplea "startServerAndCreatNextHandler".

Posteriormente, se configuran los encabezados CORS, en donde se limita la solicitud
permitida solamente a solicitudes POST.

Finalmente, se inicia el servidor y se crea el handler de la API en el único endpoint:
"/api/graphql":

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A13_6.JPG)

====

# Usando el sandbox de Apollo

Ahora, al ingresar a http://localhost:3000/api/graphql, se abrirá automáticamente la interfaz
sandbox de Apollo y pode realizar las consultas a la API:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A13_7.JPG)

Finalmente, hago una consulta para obtener la data que tiene el zip:96826:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/Result.JPG)




