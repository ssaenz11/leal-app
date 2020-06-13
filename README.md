# Prueba Técnica Leal Front

## Descripción:
El siguiente proyecto desarrolla el front de una aplicación que funciona con la ayuda del api de prueba de Leal, en donde se permitirá 
iniciar sesión, mostrar información de los puntos y  filtrar por puntos, valores y fechas. La aplicación consta con una paleta de color
amarillo y negro.

## Paleta Colores:
[link](https://coolors.co/f0ad4e-292b2c).

## Teconologías utizadas:
* Angular V 7
* Boostrap 4
* Angular Material

## Información del proyecto:
* URL: [link](https://5ee434637e0d3b1b959f192d--upbeat-mirzakhani-4d9c0b.netlify.app/)
* github: [link](https://github.com/ssaenz11/leal-app/)

## Análisis del código:
Se ha utlizado codacy para poder hacer el análisis del proyecto, a continuación se encuentra el link con los resultados: 
[link](http://app.codacy.com/manual/ssaenz11/LealAppS/dashboard).

## Estructura proyecto:

### Componentes
1. LoginComponent: Componente encargado de mostar la ventan del login.
2. Home: Componente encargado de mostar la tabla y los filtros.
3. Navbar: Componente envargado de mostrar la navegación en dónde se encuentra el logo y el log out.
4. DialogueOverview: Componente encargado de mostar la ventana emergente de las tablas.

## Servicios
La api se maneja en dos servicios en Auth, donde se manejan la api de autenticación. Por otro lado Transactions maneja la información de los puntos.

## Pipes
Existen tres pipes que permiten hacer los filtros que son serach, searchV y searchP. Cada una respectivamente se encarga de filtrar por 
tipo, valor y puntos.


## Funcionamiento local:

### Requisitos:
* Angular v > 7
* NPM

### Instrucciones:
1. Clonar el proyecto, haciendo uso del comando git clone https://github.com/ssaenz11/leal-app/.
2. Entrar a la dirección cd [DIR]
3. Instalar dependencias con el comando npm install.
4. ng serve
5. Vaya a la dirección [link](localhost:4200).
