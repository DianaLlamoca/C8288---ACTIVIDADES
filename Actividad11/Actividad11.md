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

* Dentro de la función handler (que es la que manejará la solicitud del cliente), se está realizando una solicitud usando el método "GET" mediante "fetch(url)", ya que al no especificarse el método explícitamente, se sobreentiende que es GET.

* Luego, una vez que se obtiene una respuesta la solicitud del cliente, se obtiene la response en formato "json" y se usa aserción de tipo para asegurarnos de que la respuesta sea del tipo esperado.

* En caso haya un error por parte del servidor al momento de realizar la solicitud. se enviará el código 500 como respuesta al cliente; de lo contrario, se procede a crear un arreglo de objetos "names" donde cada elemento tendrá las propiedades "id" y "name", pues ese tipo de dato es que el se enviará como respuesta al servidor.

* Se envía, finalmente, el status code 200, indicando que la solicitud fue procesada correctamente, y posteriormente se envía el arreglo de datos.
  
![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A11_3.JPG)
