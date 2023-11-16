import React, {useState} from 'react';
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import {Button} from "./Button";


export const MainInput = () => {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])
    const [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }
    const callBackButtonHandler=()=>{
        addMessage(title)
        setTitle('')
    }
    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

