import React from "react";
import ReactDOM from "react-dom";
import { Header } from "../Components/Header";
import {Action} from "../Components/Action";
import { Options } from "../Components/Options";
import {AddOption} from "../Components/AddOption"

class SampleApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleIndecision = this.handleIndecision.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);

        this.state = {
            options: []
        }
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOption(optionToremove) {
        console.log('Handle Remove Option called!', optionToremove);
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToremove !== option) }));

        console.log('Options Array after filtering', this.state.options);
    }

    handleAddition(option) {

        if (option && this.state.options.indexOf(option) > -1) {
            return 'Value Already exists in array';
        } else if (!option.trim()) {
            return 'Please enter a valid Option';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleIndecision() {
        const randomNo = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNo]);
    }

    render() {

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
            </div>
        );
    }
}

ReactDOM.render(<SampleApp />, document.getElementById('react-div'));