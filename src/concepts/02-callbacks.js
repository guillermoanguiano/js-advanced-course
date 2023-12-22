import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
    
    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';


    findHero( id1, (error, hero1) => {

        if ( error ) {
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, hero2) => {
            if ( error ) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ hero1.name }  /  ${ hero2.name }`;
        })

        // element.innerHTML = iron?.name || 'No hay heroe';
        // element.innerHTML = hero.name  ;
    } );

}

/**
 * 
 * @param {String} id 
 * @param { ( error: String|null, hero: Object)=> void } callback 
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    if( !hero ) {
        callback(`Hero with id ${ id } not found.`);
        return; // undefined
    } // Para solucionar el error de que el id no se encuentre

    callback( null, hero );

}

// Entonces un callback es una funcion que recibe de argumento una funcion la cual se crea al poner el argumento de dicha funcion en otra.