Para la actividad 14, primero se tuvo que instalar mongodb.
Posteriormente, se tuvo que crear 2 carpetas, una para el código de Mongoose. Y otra llamada "middleware" que contendrá el middleware necesario.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_1.JPG)


Se creará el esquema para definir la estructura de los datos de la base de datos y se mapee la instancia de Mongoose a los documentos en la colección. Es importante tener en cuenta que el esquema de Mongoose coincidrá con el esquema creado para la API GraphQL, ya que posteriormente se deberá conectar la API GraphQL a la base de datos para reemplazar el objeto JSON estático.

=====

# Creando la interfaz

Sin embargo, antes de escribir el modelo y esquema de Mongoose, se declarará una interfaz, ya que sin dicha interfaz, no se podrá tipar el modelo para TSC y el código no compilará-

Para ello, se creará un archivo interface.ts dentro de /mongoose/weather donde se declarará la interfaz:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_2.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_3.JPG)

======

# El esquema de Mongoose

Acá se define el schema de mongoose. Las propiedades de nivel superior representan los campos en el documento. Cada campo va a contener un tipo y un indicador que señala si dicho campo es obligatorio o no.

Los campos pueden tener propiedades adicionales.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_4.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_5.JPG)

======

# Creando el modelo

Ya que se tiene el esquema, se podrá recién crear el modelo de Mongoose. Este wrapper sobre el esquema va a proporcionar el acceso a los documentos de MongoDB en la colección para las operaciones CRUD.

Para ello, se escribirá el modelo en el archivo mongoose/weather/model.ts:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_6.JPG)

* Se importa el módulo mongoose y el constructor del modelo
* Además, se importa la interfaz y el esquema que se crearon anteriormente
* Posteriormente, se configura el modelo Weather, utilizando la interfaz WeatherInterface que se creó anteriormente para tiparlo.
* Se le pasa 2 parámetros: el nombre del modelo y el esquema que va a definir la estructura interna de datos del modelo
  
![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_7.JPG)

======

# Middleware de conexión a la base de datos
Este middle abrirá una conexión a la base de datos

Para ello, se deberá crear un archivo y así poder implementar el middleware:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_8.JPG)

Se usará la función async para mantener la conexión a la base de datos. Luego, se mapeará los modelos de Mongoose a los colecciones de MongoDB para que se pueda acceder a través de Mongoose.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_9.JPG)

========

# Consultar la base de datos

## Crear un documento

La primera operación será "crear". Para ello, se debe llamar a mongoose.create y puede usarse tanto para crear como para actualizar un conjunto de datos.
Para ello, se creará un archivo "services.ts" dentro de mongoose/weather:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_10.JPG)

Para almacenar un documento, se crea y exporta la función async storeDocument
Esta función toma el conjunto de datos como argumento. Y se tipará como WeatherInterface.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_11.JPG)

## Leer un documento

Dentro del archivo "services.ts":
Se define una función findByZip para encontrar y devolver el primer documento de la colección Weathers donde la propiedad "zip" coincida con el zipcode pasado a la función como parámetro

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_12.JPG)

## Actualizar un documento

Dentro del archivo "services.ts":
La función updateByZip toma 2 parámetros. El primero es una cadena que representa el zipcode que se usó para consultar el documento que se va a actualizar.
El segundo es el nuevo conjunto de datos, que será tipificado como WeatherInterface.
Se llama a la función updateOne de mongoose en el modelo, pasándole un objeto de filtro y los últimos datos

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_13.JPG)

=====

# En lo anterior solamente estoy mostrando la manera en cómo se crearon los archivos de la lectura "MongoDB y Mongoose", ya que se deben exportar las funciones creadas en esa lectura para la actividad 14

======
# ACTIVIDAD 14

# Conectando a la base de datos

Modificando el archivo "graphql.ts" de /pages/api:

* Se importa la función dbConnect desde el middleware
* Se crea un nuevo wrapper para asegurarnos de que cada llamada a la API se conecte a la base de datos

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_14.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_15.JPG)


=====

# Agregando servicios a los resolvers

La modificación es que se reemplazó la funcionalidad del "array.filter" con los servicios adecuados:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_16.JPG)

====

Finalmente, se puede visitar la ruta http://localhost:3000/api/graphql para leer documentos desde la base de datos MongoDB

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A14_17.JPG)



====
# Nota: En el directorio de la actividad14 añadí los archivos que contienen los códigos correspondientes. 
