//import { heroes } from './data/heroes';

import heroes, {owners} from '../data/heroes';

console.log(owners);

//import heroes from './data/heroes';


// import {heroes} from './data/heroes';

// console.log(heroes);

//Mi solucion----------
//const getHeroeById = heroes.find(id => id.id === 2);
//console.log(getHeroeById);
//Mi solucion----------


//Manera innecesariamente larga
/*const getHeroeById = (id) => {
    return heroes.find((heroes) =>{
        if(heroes.id === id){
            return true;
        }else{
            return false;
        }
    });
}*/

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);


//console.log(getHeroeById(2));

//find?, filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('Marvel'));

/*export {
    getHeroeById as default,
}*/

