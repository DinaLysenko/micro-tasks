import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type MoneyType = {
    banknots: string
    value: number
    number: string
}
export type FilterType = 'All'| 'RUBLS' | 'Dollars'
export const Banknots: React.FC = () => {
    let [money, setMoney] = useState<MoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money

    if (filter === 'RUBLS') {
        currentMoney = money.filter(m => m.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(m => m.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    );
};

