import React from "react";
import { Header } from "./Header";
import {Action} from "./Action";
import { Options } from "./Options";
import {AddOption} from "./AddOption"
import { OptionModal } from "./OptionModal";

export class SampleApp extends React.Component {

    state = {
        options : [],
        selectedOption : undefined
    }

    handleRemoveAll= () => {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveSelectedoption = () => {
        this.setState(() => ({ selectedOption: undefined }) )
        console.log('Remove Selected Option triggered');
    }

    handleRemoveOption = (optionToremove) => {
        console.log('Handle Remove Option called!', optionToremove);
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToremove !== option) }));

        console.log('Options Array after filtering', this.state.options);
    }

    handleAddition = (option) => {

        if (option && this.state.options.indexOf(option) > -1) {
            return 'Value Already exists in array';
        } else if (!option.trim()) {
            return 'Please enter a valid Option';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleIndecision = () => {
        const randomNo = Math.floor(Math.random() * this.state.options.length);
        
        this.setState( () =>({
            selectedOption : this.state.options[randomNo]
        }));
    }

    render = () => {

        const title = 'New Title from Component!';
        const subtitle = 'Sample Sub-Title';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handleClick={this.handleIndecision} />

                {this.state.options.length === 0 && <p>Please Add Options to continue</p>}
                <Options options={this.state.options}
                    handleRemove={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption} />

                <AddOption handleAddition={this.handleAddition} /> 
                <OptionModal 
                options={!!this.state.selectedOption} 
                selectedOption={this.state.selectedOption}
                removeSelectedOption = {this.handleRemoveSelectedoption}
                />
            </div>
        );
    }
}

//ReactDOM.render(<SampleApp />, document.getElementById('react-div'));