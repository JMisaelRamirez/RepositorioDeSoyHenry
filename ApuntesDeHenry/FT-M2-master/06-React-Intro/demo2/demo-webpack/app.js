import React from 'react';
import ReactDOM from 'react-dom';
import Network from './src/network';
import Predictions from './src/predictions';


const lines = [
    {
        name: "Linea A",
        station: "La Paz",
        time: [0, 1, 2],
        id: 0
    },
    {
        name: "Linea H",
        station: "Hospitales",
        time: [3, 4, 5],
        id: 1
    },
    {
        name: "Linea A",
        station: "Arenales",
        time: [6, 7, 8],
        id: 2
    },
    {
        name: "Linea C",
        station: "Constitucion",
        time: [9, 10, 11],
        id: 3
    }
]

function App() {
    return(
        <div>
            <Network lines={lines}/>
            <Predictions stationName={"ESTACION DE MISAEL"}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('app'))
