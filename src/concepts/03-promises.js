import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
    
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = ( hero1, hero2 ) => {
        element.innerHTML = `
        <h3>${ hero1.name } and ${ hero2.name }</h3>
        `;
    }

    const renderError = ( error ) => {
        element.innerHTML = `<h3>${ error }</h3>`;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371f97c29d020f1e1f6d';

    //! Este tipo de promesas solo se pueden hacer si el resultado de una promesa no depende de la otra 
    //! Forma ideal si se puede llegar a hacer 
    Promise.all([
        findHero(id1),
        findHero(id2),
    ]).then( ([hero1, hero2]) => renderTwoHeroes( hero1, hero2 ) ).catch(renderError);


    //! FORMA 1
    // findHero( id1)
    //     .then( hero1 => {
    //         findHero(id2)
    //             .then( hero2 => {
    //                 renderTwoHeroes(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError); // En lugar de hacer la sintaxis de siempre de ( hero ) => renderHero( hero ), debido a que estamos mandando lo mismo que recibimos y lo unico que pide se puede poner solamente el nombre de la funcion sin los parentesis y funcionaria de igual forma 

    
    //! Forma 2
    // let hero1;
    // findHero(id1)
    //     .then( hero => {

    //         hero1 = hero
    //         return findHero(id2);

    //     }).then( hero2 => {

    //         renderTwoHeroes( hero1, hero2 );

    //     })
    //     .catch( renderError );

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => { 
    return new Promise((resolve, reject) => {
        
        const hero = heroes.find( hero => hero.id === id);

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found.`);
    });
}

// Las promesas en JS es como en la vida real, estas prometiendo que vas a buscar, ejecutar o hacer algo, y si eso no pasa tienes el reject para tener la otra parte del codigo 