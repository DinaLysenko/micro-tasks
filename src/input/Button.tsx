import React from 'react';

type ButtonPropsType={
    name: string
    callBack: ()=>void
}
export const Button:React.FC<ButtonPropsType> = ({name, callBack}) => {
    const onClickButtonHandler=()=>{
        callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

