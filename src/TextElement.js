import React from 'react';

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
            <div className={props.className}>
                <button onClick={() => props.onClick()}>
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

