const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
}

Header.defaultProps = {
    title: 'Some Default Title'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleClick}>Generate Random things!</button>
        </div>
    );
}

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

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={(e) => props.handleRemoveOption(props.optionText)}>Remove</button>
        </div>
    );
}

class AddOption extends React.Component {

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

class SampleApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleIndecision = this.handleIndecision.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);

        this.state = {
            options: this.props.options
        }
    }
    componentDidMount() {
        console.log('ComponentDidMount Called');

        try {
            const optionsString = localStorage.getItem('options');

            if (optionsString) {
                const options = JSON.parse(optionsString);

                this.setState(() => ({ options }));
            }
        }
        catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {

        const options = this.state.options;

        if (this.state.options !== prevState.options.length) {
            const json = JSON.stringify(options);

            localStorage.setItem('options', json);
            console.log('ComponentDidUpdate');
        }
    }
    componentWillUnmount() {
        console.log('Component Unmounted');
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

        const title = 'New Title!';
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

SampleApp.defaultProps = {
    options: ['Default Value 1', 'Default Value 2']
}

ReactDOM.render(<SampleApp />, document.getElementById('react-div'));