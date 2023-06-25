import React from 'react';
import Trains from './trains';


export default function({trainNum}) {
    const trains = ["Tren Bala", "Clasico", "Super Speed", "Modelo 1998"];
    return (
        <div>
            <h2>Plataform {trainNum}</h2>
            <Trains trains={trains}/>
        </div>
        
    ) 
}