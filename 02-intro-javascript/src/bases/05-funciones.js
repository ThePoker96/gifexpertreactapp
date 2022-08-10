//Funciones js
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;


// saludar = 30;
// console.log(saludar('Goku'))

console.log(saludar2('Vegeta'))
console.log(saludar3('Goku'))
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    uername: 'El_Papi1502'
})

const user = getUser();
console.log(user);
//console.log(getUser())


//Tarea
//1. Transformen a una funcion de Flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
/*function getUsuarioActivo(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Gabriel');
console.log(usuarioActivo);*/

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

const userAct = getUsuarioActivo('Gabriel');
console.log(userAct);
