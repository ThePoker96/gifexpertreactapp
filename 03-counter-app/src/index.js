import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'
import './index.css';
//const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

// root.render(<PrimeraApp saludo="Hola Mundo" />);
root.render(<CounterApp value={10} />);