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
