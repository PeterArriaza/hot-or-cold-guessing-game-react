import React from 'react';
import './TextElement.css'


export default function TextElement (props) {
    if (props.type === "text") {
        return (
            <div className={props.className}>
                <span>{props.text}</span>
            </div>
        );
    }
    else if (props.type === "button") {

        return (
            <div>
                <button className={props.className} onClick={() => props.onClick()}>
                    {props.text}
                </button>
            </div>
        )
    }
    else if (props.type === "input") {
        return (
            <div className={props.className}>
                <input type="text" placeholder={props.text}></input>
            </div>
        )
    }
    else (console.log("invalid TextElemet type"));
}

