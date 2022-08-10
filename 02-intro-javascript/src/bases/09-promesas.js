import { getHeroeById } from "./bases/08-imp-exp";


/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('2 segundos despues')
        
        //Tarea
        //Importen el getHeroeById
        const heroe = getHeroeById(2);
        //console.log(heroe);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe')
    }, 2000)
});



promesa.then((heroe) => {
    console.log('Heroe', heroe);
})
.catch(error => console.warn(error));*/

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('2 segundos despues')

            //Tarea
            //Importen el getHeroeById
            const heroe = getHeroeById(id);
            //console.log(heroe);
            if (heroe) {
                resolve(heroe);

            } else {
                reject('No se pudo encontrar el heroe')
            }
        }, 2000)
    });
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);