import React from "react";

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleClick}>Generate Random things!</button>
        </div>
    );
}

export {Action};