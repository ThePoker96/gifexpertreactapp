import React, { useState } from 'react';
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react';

//FC
const CounterApp = ({ tarea, value = 10 }) => {

    const [counter, setCounter] = useState(value); //[]


    //handleAdd
    const handleAdd = (e) => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }

    //handleSub
    const handleSub = () => setCounter(counter - 1);


    //handleRest
    const handleRest = () => setCounter(value);

    return (
        <>
            <h1>{tarea}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRest}>Reset</button>
            <button onClick={handleSub}>-1</button>

        </>
    );
}

CounterApp.propType = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    tarea: 'CounterApp'
}

export default CounterApp;