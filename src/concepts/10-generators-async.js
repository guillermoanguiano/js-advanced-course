import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsAsyncComponent = async( element ) => {
    
    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {

        const { value, done } = await heroGenerator.next();
        isFinished = done;
        if ( isFinished ) break;

        console.log(value); //! Hay que tener mucho cuidado cada vez que se manda a llamar el .next ya que aunque sea en un console.log o en cualquier lado se mandara el siguiente por lo que lo mejor es ponerlo en una variable como aqui arriba y de ahi sacar los booleanos y los values que uno necesite 

        element.innerText = value;

    } while ( !isFinished )

}

async function* getHeroGenerator() {

    for ( const hero of heroes ) {
        await sleep();
        yield hero.name;
    }

    return;
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 350);
    })
}