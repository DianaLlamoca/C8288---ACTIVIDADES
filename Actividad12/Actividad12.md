# 1) Renderizando una plantilla
Acá estoy usando una plantilla, y se usará ejs como el motor de plantillas.
   
![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I1.JPG)

Luego, en el endpoint principal del servidor ("/"), se renderizará la plantilla:
![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I2.JPG)

-------

# 2) Rutas estáticas

Definiendo rutas estáticas:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I3.JPG)

Con .json() se está enviando una respuesta al cliente, donde se está estableciendo que el contenido de la response que está enviando el servidor al cliente está en formato json.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I4.JPG)

-------

# 3) Rutas dinámicas

Definiendo rutas dinámicas:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I5.JPG)

Para acceder a los parámetros de rutas, uso req.params. "params" es un objeto, cuyos valores dependerán de los valores que se ingresen en la ruta dinámica.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I6.JPG)

-------

# 4) Parámetros opcionales
Definiendo parámetros opcionales:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I7.JPG)

Como el parámetro es opcional, y es un parámetro de ruta, se accede a dicho valor usando ".params". Sin embargo, uso "if" para verificar si existe o no dicho parámetro y en base a ello enviar una respuesta.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I8.JPG)

-------

# 5) Parámetros de consulta

Definiendo parámetros de consulta:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I10_.JPG)

Los parámetros de consulta se definen luego de "?" en la URL:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I11_.JPG)

========

# GESTIÓN DE ENCABEZADOS
Al definir "Content-Type","text/html" se está estableciendo que la respuesta del servidor será un documento html:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I12.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I13.JPG)

========

# REDIRECCIONES

Realizo una redirección a "/redireccion", mediante .redirect y pasando por parámetro la ruta relativa:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I14.JPG)

=======

# CÓDIGOS DE ESTADO Y ENCADENAMIENTO DE MÉTODOS

Se pueden encadenar métodos. Por ejemplo, primero se puede enviar el código de estado y posteriormente establecer como header el tipo de respuesta que el servidor brindará al cliente:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I15.JPG)

=======

# Enviando archivos

Para enviar archivos, se debe hacer uso del comando .sendFile.
En este caso, al dirigirse al endpoint "/enviar_archivo", enviaré un archivo html.
Uso "__dirname" para obtener la ruta del directorio más el nombre del archivo que voy a enviar.

Luego, creo una ruta, que empleará el método post para poder recibir los datos enviados en el formulario definido en el archivo html.

En el archivo html definí la ruta del servidor donde se enviarán los datos, así como el método.

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I20.JPG)

En este caso, "post", puesto que la ruta "/saludar" emplea dicho método.
Lo que hago en app.post("/saludar") es obtener los datos mediante el body de la solicitud, y uso la desestructuración de objetos, ya que en el elemento html, definí name="nombre", de tal forma que el dato se almacenará en un objeto de propiedad "nombre".
Y luego establezco el tipo de respuesta del servidor al cliente mediante .set para posteriormente mandar una respuesta al cliente con los datos que se obtuvieron del body de la solicitud:
![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I16.JPG?raw=true)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I17.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I18.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/I19.JPG)
