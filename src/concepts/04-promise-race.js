

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {
    
    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then( renderValue ); // Este metodo de las promesas lo que hace es que manda a llamar la promesa mas rapida, en este caso la que primero cumple con la promesa, de esa forma lo vimos con el setTimeOut, podria funcionar con promesas a informacion almacenada en la nube, servidores, busquedas http, etc

}

const slowPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
});

const fastPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});