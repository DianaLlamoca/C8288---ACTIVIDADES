# 1) ALMACENANDO INTERFACES Y TIPOS PERSONALIZADOS
Acá se definen las interfaces y tipos personalizados. Servirán para determinar las props que recibirán las páginas que mostrarán los componentes meteorológicos, así como para determinar el tipo de respuesta que se enviará por parte del servidor al cliente cuando se realiza una solicitud:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_1.JPG)

Si bien se indica inicialmente que se debe crear un archivo "custom.d.ts" en la raíz del proyecto. Estos se definirán directamente en los archivos donde se van a crear las páginas como las rutas para las API.

======

# 2) CREANDO LAS RUTAS DE API

## Para la ruta "api/names"

Dentro de esta ruta, se creará un archivo "names.ts":

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_2.JPG)

Dentro de este archivo, se realizará lo siguiente:
* Primero se importan los tipos necesarios para manejar las solicitudes, ya sean las solicitudes del cliente, así como las respuestas por parte del servidor (NextApiRequest y NextApiResponse)
  
* Se define el tipo "responseItemType", que servirá para definir el tipo de respuesta de cada elemento del arreglo de objetos que enviará el servidor al cliente.

* Dentro de la función handler (que es la que manejará la solicitud del cliente), se está realizando una solicitud usando el método "GET" a la url definida en el código mediante "fetch(url)", ya que al no especificarse el método explícitamente, se sobreentiende que es GET.

* Luego, una vez que se obtiene una respuesta a la solicitud del cliente, se obtiene la response en formato "json" y se usa aserción de tipo para asegurarnos de que la respuesta sea del tipo esperado.

* En caso haya un error por parte del servidor al momento de realizar la solicitud, se enviará el código 500 como respuesta al cliente; de lo contrario, se procede a crear un arreglo de objetos "names" donde cada elemento tendrá las propiedades "id" y "name", pues ese tipo de dato es que el se enviará como respuesta al cliente.

* Se envía, finalmente, el status code 200, indicando que la solicitud fue procesada correctamente, y posteriormente se envía el arreglo de datos.
  
![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_3.JPG)

----

Ahora, para solicitar datos a la API que se ha creado, se usará el endpoint "/api/names/names":

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_4.JPG)

-----

## Para la ruta dinámica "/api/[zipcode]"
Para definir rutas dinámicas, se emplean los corchetes "[]"

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_5.JPG)

Dentro del archivo [zipcode].ts, lo que se está haciendo es lo siguiente:
* Se define el tipo de respuesta que enviará el servidor al cliente cada que realiza una solicitud al endpoint "/api/[zipcode]", donde zipcode puede tomar cualquier valor definida en la ruta dinámica. Es decir, "/api/1", etc...
* Luego, se crea una función handler de solicitudes, que devolverá una respuesta del tipo especificado.
* Para acceder al parámetro dinámico de la ruta, se usa req.query, pues en routes, NextJS agrupa, ya sean parámetros de ruta o de consulta dentro del objeto "req.query". Para acceder al valor de zipcode, se accede directamente a la propiedad: "req.query.zipcode".
* Finalmente, se devuelve una respuesta de tipo json que tiene las propiedades "zipcode", "weather", "temp". Pues ese es el tipo de datos que debe devolver la handler function, pues así se especificó mediante ":Promise<NextApiResponse<WeatherDetailerType>|void>".
 
![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I11_6.JPG)

Para acceder a la api definida mediante una ruta dinámica, usamos la sintaxis "api/[zipcode]", donde zipcode es el valor especificado en la url dinámica:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_7.JPG)

------

# 3) CREANDO LAS RUTAS DE PÁGINAS

## Página "/hello"

Se creará un página que se accederá mediante "/hello", pues se está creando un archivo directamente dentro del directorio "pages":

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_8.JPG)

En este código se realiza lo siguiente:
* Primero se importa el tipo NextPage para indicar que es una página de NextJS, de tal forma que se puedan incluir propiedades específicas de las páginas de NextJS como getStaticProps, etc
* Luego, se importan componentes esécíficos de NextJS, como el componente Head, Link, Image que servirán para definir los elementos de la página.
* La página mostrará un link que redireccionará a la ruta relativa "/components/weather" que se definirá dentro del directorio "pages" y que mostrará el componente creado en el archivo "weather.tsx" al clickear sobre el link.
* Finalmente, se exporta el componente para que este pueda ser visualizado al ir a la ruta "/hello" que mostrará la página.

  ![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_9.JPG)

## Página "/components/weather":

Se crea una carpeta "components" dentro del directorio "pages". De tal forma que cuando se va a acceder a esa página, se debe usar la ruta "/components/weather":

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_10.JPG)

Dentro de este archivo, se realizará lo siguiente:
* Se importa el tipo NextPage para indicar que es una página de NextJS.
* Se define la interfaz para definir la estructura que deben tener los "props" que recibirá el componente Weather.
* Dentro del componente, se usarán los hooks useState y useEffect. useEffect se usará para establecer un contador, dicho contador se actualizará cada que se haga click sobre el h1 elemento mediante la función setcount.
* El hook useEffect se implementará para que al renderizarse por primera vez la página, la variable "count" (que inicialmente es cero) se actualice al valor de 1.
* El componente retorna un JSX que tiene el elemento "h1", de tal forma que al dar click sobre ese elemento se actualizará la variable "count" agregándole +1 al valor. Además, se mostrará el valor "weather" de la prop que se le pasa al componente mediante return (<WeatherComponent weather="sunny"/>).
* Finalmente, se exporta el componente para poder visualizar la página.

  ![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_11.JPG)
