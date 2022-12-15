# Contoso Airlines
Examen de Laboratorio de Aplicaciones Moviles

## Instalacion
Clonar este repositorio `git clone https://github.com/luzaracelydls/contosoAirlines.git`

Abrir en editor de Codigo VS Code

Abrir la terminal de VSCOde o bien, la consola de Windows CMD y ubicar el folder donde clonaste el repositorio. Ejemplo, si lo guardaste en Documentos, la ruta a ubicar sería algo como: **c://Users/AlumnoUsuario/Documents/contosoAirlines**

Instalar las dependencias `npm install`

Crear una rama con la nomenclatura `MATRICULA-ALUMNO-contoso` (**Importante! ponderacion 5 puntos por este detalle**)

Correr el proyecto bajo `ng serve`

Al finalizar la actividad subiras tus cambios a la rama que creaste y **NO** a master.

## Puntos a Evaluar

1. **No es necesario agregar estilos adicionales, pero se debe utilizar componentes de Ionic**
2. Para los datos de la aplicacion utilizaremos **Firebase** para almacenar las imagenes necesarias y las colecciones (base de datos)

### Vista Principal
Para esta seccion, puedes utilizar el componente **Slide** de Ionic. - 25 puntos 
#### Busca Vuelo
Seccion de busqueda de vuelos por localidades, cuando el usuario seleccione un destino al hacer clic en cualquiera de las tarjetas, se selecciona el destino y se muestra una seccion con una lista de localidades de origen desde donde el usuario quiere viajar. La vista debe ocultar la lista de los destinos.


#### Selecciona Horario
Para este ejercicio no vamos a filtrar por fechas, pero habilitaremos una lista de horarios disponibles. El usuario debe haber seleccionado origen y destino para este paso. La vista debe ocultar la lista de ciudades origen para este punto. - 25 puntos

#### Agrega datos de pasajero - 20 puntos 
Habilitar un formulario para que el usuario ingrese sus datos:
1- Número de pasajeros.
2- Por cada pasajero, incluir los siguientes campos:
a. Nombre
b. Apellidos
c. No. de Pasaporte

#### Confirmacion de Vuelo - 20 puntos
Cuando el usuario llene los datos de los pasajeros, llevar a una pantalla de confirmación con los detalles del vuelo seleccionado

### Menu lateral - 15 puntos 
El menu lateral incluye opciones de navegacion de cuenta, vuelos e inicio. Cada enlace lleva a una ruta diferente y cada pantalla utiliza datos de la base de datos.

#### Fecha de entrega
16 de Diciembre antes de las 23:59