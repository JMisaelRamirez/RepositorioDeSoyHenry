import React from 'react'
import Line from './line'

// function (props ) {}
export default function Network({lines}) {
    return (
        <div>   
            {
                lines.map(l => <Line name={l.name} station={l.station}/>)
            }
        </div>
    )
}