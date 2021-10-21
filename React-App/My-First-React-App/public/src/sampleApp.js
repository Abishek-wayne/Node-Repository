// import getSenior, {isAdult,canDrink} from './person.js'

// console.log('sampleApp.js is running');
// console.log('isAdult ', isAdult(18));
// console.log('canDrink ', canDrink(21));
// console.log('isSenior ', getSenior(55));

import React from 'react';
import ReactDOM from 'react-dom';

const sampleJsx = <p>Hello I will render something!</p>;
ReactDOM.render( sampleJsx, document.getElementById('react-div') );