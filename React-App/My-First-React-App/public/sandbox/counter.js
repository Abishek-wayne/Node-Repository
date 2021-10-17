class Counter extends React.Component {
    constructor(props) {

        //super must be called in order to use the this keyword.
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: this.props.count
        };
    }

    componentDidMount() {
        const num = localStorage.getItem('count');
        const count = parseInt(num);

        console.log('Num & Count ', num, count);

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
        console.log('ComponentDidUpdated called ');
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

    handleAddOne() {
        console.log('Handle Add One Clicked!');
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        console.log(this);
        console.log('Handle Minus One Clicked!');

        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        console.log(this);
        console.log('Handle Reset One Clicked!');

        this.setState(() => {
            return {
                count: 0
            };
        })
    }

}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('react-div'));