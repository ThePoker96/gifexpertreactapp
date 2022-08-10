import React from 'react';
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react';


//FC
const PrimeraApp = ({ saludo, subtitulo }) => {

    // const saludo = {
    //     nombre: 'Gabriel',
    //     edad: 26
    // }

    // const saludo = 'Hola Mundo';

    // console.log(props);


    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propType = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;