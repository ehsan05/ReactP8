import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







// const [name,sound] = useAnimals(cat);
// console.log(  useAnimals(cat));

// Destructing Ararys 
// let [cat,dog] = animals;
// console.log(cat);


// Destructing Objects
//name and sound both should be same as key in the info.jsx
// let {name,sound} = cat;
// console.log(name,sound);

//if we want to chang them, then it can be done in the following ways
// let {name:catname,sound:catsound} = cat;
// console.log(catname);

//If name's value isn't given in the data then we can assign it.
// let{name = "fluffy" ,sound} = cat;
// console.log(name);