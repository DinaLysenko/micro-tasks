import React from 'react';
import {FilterType, MoneyType} from "./Banknots";

type NewComponentType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (nameButton: FilterType)=>void
}
export const NewComponent:React.FC<NewComponentType> = ({currentMoney, onClickFilterHandler}) => {
    return (
        <>
            {currentMoney.map((b, index) => {
                return (
                    <ul>
                        <li key={index}>
                            <span>  {b.banknots} </span>
                            <span>  {b.value} </span>
                            <span>  {b.number} </span>
                        </li>
                    </ul>
                )
            })}
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
};

