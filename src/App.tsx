import React, {useState} from 'react';
import './App.css';
import {Cars} from "./cars/Cars";
import {topCars} from "./cars/dataCars";
import {Banknots} from "./banknots/Banknots";
import {MainInput} from "./input/MainInput";
import DestArray from "./dest-arr/DestArray";


function App() {
    return (
        <div className="App">
            {/*<Cars topCars={topCars}/>*/}
            {/*<Banknots/>*/}
            {/*<MainInput/>*/}
            <DestArray/>
        </div>
    );
}

export default App;
