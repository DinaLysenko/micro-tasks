import React from 'react';
import './App.css';
import {Cars} from "./cars/Cars";
import {topCars} from "./cars/dataCars";


function App() {
    return (
        <div className="App">
            <Cars topCars={topCars}/>
        </div>
    );
}

export default App;
