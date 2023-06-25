import React from "react";
import DepartureBoard from './departureBoard'

export default function({stationName}) {
    return (
        <div>
            <h1>{stationName}</h1>
            <DepartureBoard trainNum="1"/>
            <DepartureBoard trainNum="2"/>
        </div>
    )
}
