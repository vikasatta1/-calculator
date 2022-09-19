import React from 'react';
import {ACTIONS} from "./App";
type ButtonProps = {
    digit:string
    dispatch:({}:any)=>void
}
const DigitButton = ({dispatch,digit }:ButtonProps) => {
    return (
        <div>
            <button onClick={()=>dispatch({type: ACTIONS.ADD_DIGIT,payload:{digit}})}>{digit}</button>
        </div>
    );
};

export default DigitButton;