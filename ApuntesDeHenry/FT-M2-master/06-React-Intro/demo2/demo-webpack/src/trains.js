import React from "react";

export default function({trains}) {
    return (
        <p>
            {
                trains.map(t => <p>{t}</p>)
            }
        </p>
    )
}