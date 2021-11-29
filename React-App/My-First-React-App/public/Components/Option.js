import React from "react";

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={(e) => props.handleRemoveOption(props.optionText)}>Remove</button>
        </div>
    );
}

export {Option};