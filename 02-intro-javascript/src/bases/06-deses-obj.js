//Desestructuracion
//Asignacion Destructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);*/

const use = ({clave, nombre, edad, rango = 'Capitan'}) => {
    //const { nombre, edad, clave } = usuario;  
    //console.log(nombre, edad, rango)  

    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.4545,
            lng: 18.6454,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = use(persona);

console.log(nombreClave, anios);
console.log(lat, lng);