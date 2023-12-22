import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371f1efebc31def272e2';

    // if ( await getHeroAsync(id) ) {
    //     element.innerHTML = 'Si existe ese heroe';
    //     return;
    // }

    // element.innerHTML = 'No existe el heroe'
    

    const heroIds = heroes.map( hero => hero.id );

    const heroPromises = getHeroesAsync( heroIds );

    for await( const hero of heroPromises ) {
        element.innerHTML += `${ hero.name } <br/>`;
    }

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}