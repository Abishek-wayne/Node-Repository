import React from "react";

export class AddOption extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: ''
        }

        this.addOption = this.addOption.bind(this);
    }

    addOption(e) {
        e.preventDefault();

        const value = e.target.elements.optionValue.value;
        const error = this.props.handleAddition(value);

        e.target.elements.optionValue.value = '';

        this.setState(() => ({ error }));

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type='text' name='optionValue' />
                    <button>Click to add Options</button>
                </form>
            </div>
        );
    }
}