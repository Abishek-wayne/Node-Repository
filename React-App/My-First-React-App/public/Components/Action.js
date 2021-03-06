import React from "react";

const Action = (props) => (
        <div>
            <button 
            className="big-button"
            disabled={!props.hasOptions} 
            onClick={props.handleClick}
            >Generate Random things!
            </button>
        </div>
    );


export {Action};