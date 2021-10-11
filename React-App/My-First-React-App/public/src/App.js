class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the title!</h1>
                <h3>This is a sample Sub-Title</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <button>Generate Random things!</button>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    <li>This is the first option</li>
                    <li>This is the Second Option</li>
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <button>Click to add Options</button>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('react-div'));