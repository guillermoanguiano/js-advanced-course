

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorComponent = ( element ) => {
    
    //! Como funciona las funciones generadoras 
    // const myGenerator = myFirstGeneratorFunction();

    // console.log( myGenerator.next() ); // El punto next manda el siguiente yield que es como una pausa en la funcion generadora, por lo que solo manda un yield por cada .next()
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() ); // Aqui ya estaria el done en true debido a que no hay mas valores.
    // console.log( myGenerator.next() ); // Aqui ya no hay valores ni nada, pero en lugar de dar error da undefined 
    
    //! Ejemplo de uso por id
    const getId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = () => {
        const { value } = getId.next();
        button.innerText = `Click me ${ value }`;
    }

    button.addEventListener('click', renderButton);
    
}

function* idGenerator() {
    let currentId = 0;
    while(true) {
        yield ++currentId;
    }
}


function* myFirstGeneratorFunction() {
    
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercero valor';
    
    return 'Ya no hay valores'
}