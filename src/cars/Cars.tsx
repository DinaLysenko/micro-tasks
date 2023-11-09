import React from 'react';
import {TopCarsType} from "./dataCars";
import "./Cars.css"

export const Cars: React.FC<TopCarsType> = ({topCars}) => {
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {topCars.map(c => {
                return (
                    <tr key={c.id}>
                        <td>{c.manufacturer}</td>
                        <td>{c.model}</td>
                    </tr>
                )
            })}
        </table>
    );
};


