import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

const name = 'Parth';
console.log(name)
const date = new Date();
var greet, h = date.getHours();
if(h>4 && h<12){
    greet = 'morning';
} else if(h>11 && h<20){
    greet = 'afternoon';
} else if(h>19 && h<25 || h>0 && h<5){
    greet = 'night';
}

createRoot(document.querySelector('#root')).render(
    <>
        <h1>
            <span>Hello {name}, </span>
            <span className={greet}>Good {greet}</span>
        </h1>
    </>
)