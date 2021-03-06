import React from "react";

const Option = (props) => (
        <div>
            <p>{props.optionText}</p>

            <button 
            className="button"
            onClick={(e) => props.handleRemoveOption(props.optionText)}
            >Remove
            </button>
            
        </div>
    );


export {Option};