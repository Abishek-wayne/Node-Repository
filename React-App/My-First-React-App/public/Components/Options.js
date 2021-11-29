import React from "react";
import {Option} from "../Components/Option"

const Options = (props) => {
    return (
        <div>
            {props.options && props.options.map((option) => <Option key={option} optionText={option}
                handleRemoveOption={props.handleRemoveOption} />
            )}
            <button onClick={props.handleRemove}>Remove All</button>
        </div>
    );
}

export {Options};