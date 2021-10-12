class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    generateRandom() {
        alert('Ouch! You clicked me!');
    }
    render() {
        return (
            <button onClick={this.generateRandom}>Generate Random things!</button>
        );
    }
}

class Options extends React.Component {
    removeOptions() {
        alert('Remove Options');
    }
    render() {
        return (
            <div>
                <p>Options Component here!</p>
                {this.props.options && this.props.options.map((option) => <Option key={option} optionText={option} />
                )}
                <button onClick={this.removeOptions}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    addOption( e ) {
        e.preventDefault();

        const value = e.target.elements.optionValue.value;
        if( value ) {
            alert(`You Have Added a new element in the Array! ${value}` );
        }
    }
    render() {
        return (
            <div>
            <form onSubmit={this.addOption}>
            <input type = 'text' name = 'optionValue' />
            <button>Click to add Options</button>
            </form>
            </div>
        );
    }
}

class SampleApp extends React.Component {

    render() {

        const title = 'New Title!';
        const subtitle = 'Sample Sub-Title';
        const options = ['Uno Numero', 'Da Numero', 'Thres Numero'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

ReactDOM.render(<SampleApp />, document.getElementById('react-div'));