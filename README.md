Challenge para Streambe creado por Jorge Ariztegui.

Descripcion de la Aplicación:
Esta aplicación es un sistema de login y dashboard que permite a los usuarios registrarse con cualquier nombre y contraseña. Una vez registrado, se almacena un token de autenticación en el local storage del navegador. El dashboard muestra una tabla de usuarios extraídos de una Api.

Características:
Los usuarios pueden registrarse con cualquier nombre y contraseña.
Se muestra una alerta si no se completan todos los campos requeridos durante el login.
Se utiliza un token de autenticación obtenido de https://www.mockachino.com/06c67c77-18c4-45/login y se almacena en el local storage.
La ruta del dashboard está protegida y solo se puede acceder si hay un token de autenticación válido.
El dashboard muestra una tabla con los usuarios extraídos de https://www.mockachino.com/06c67c77-18c4-45/users.
Los usuarios pueden cerrar sesión, lo que elimina el token de autenticación y los redirige al login.
Se utilizó Tailwind y DaisyUI para los estilos.


Guia de Uso:
Instala las dependencias utilizando npm install.
Ejecuta la app utilizando npm run dev.
Abri tu navegador y anda a http://localhost:5173/ para acceder al home.
