# Acceso al recurso protegido sin token de acceso
Primero intento realizar una solicitud get usando curl al link especificado.
Sin embargo se obtiene el mensaje "Unauthorized request: no authentication given":

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A16_1.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A16_2.JPG)


Eso indica que el acceso está restringido. Por lo que se va a necesitar un token de acceso válido

# Configuración del cliente OAuth

Antes de obtener un token de acceso, primero se configurará un cliente OAuth.

Debo completar el formulario del link "https://www.usemodernfullstack.dev/register"

Luego de completar el formulario, recibí un ClientID y un Client Secret.

Además, se me proporcionó una "Redirect URL".


# Iniciar sesión para recibir el permiso de autorización
Para ello, debo obtener el código de autorización.
Así que uso el comando
curl -i \
    -X POST 'https://www.usemodernfullstack.dev/oauth/authenticate' \
    -H 'Accept: text/html' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d "response_type=code\
&client_id=<OAUTH_CLIENT_ID>\
&state=4nBjkh31\
&scope=read\
&redirect_uri=http://localhost:3000/oauth/callback\
&username=<OAUTH_USER>\
&password=<OAUTH_PASSWORD>"

Donde debo reemplazar los placeholders "<OAUTH_CLIENT_ID>","<OAUTH_USER>","<OAUTH_PASSWORD>"

Allí es donde obtengo el Authorization_Grant

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A16_3.JPG)

# Intercambio del código de autorización por un token de acceso

Ahora, con el código de autorización obtenido, solicitaré un token de acceso mediante
el comando:
curl -i \
    -X POST 'https://www.usemodernfullstack.dev/oauth/access_token' \
    -H 'Accept: text/html, application/json' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d "code=<AUTHORIZATION_GRANT>\
&grant_type=authorization_code\
&redirect_uri=http://localhost:3000/oauth/callback\
&client_id=<OAUTH_CLIENT_ID>\
&client_secret=<OAUTH_CLIENT_SECRET>"

Donde tuve que reemplazar los placesholders <AUTHORIZATION_GRANT>, <OAUTH_CLIENT_ID> y <OAUTH_CLIENT_SECRET> que obtuve al realizar las solicitudes mediante el comando curl. Y obtuve como respuesta lo siguiente:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A16_4.JPG)

Este JSON contiene el token de acceso necesario para acceder al recurso protegido:

# Acceso al recurso protegido con el token de acceso

Finalmente, se usará el token de acceso para acceder al recurso protegido mediante el comando:
curl -i \
    -X GET 'https://www.usemodernfullstack.dev/protected/resource' \
    -H 'Accept: text/html' \
    -H 'Authorization: Bearer <ACCESS_TOKEN>'

Y obtengo el 200 como status code:

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A16_5.JPG)

![](https://github.com/DianaLlamoca/C8288---ACTIVIDADES/blob/main/Imagenes/A16_6.JPG)

Esta respuesta confirma que el acceso al recurso protegido se realizó correctamente utilizando el token de acceso válido.



