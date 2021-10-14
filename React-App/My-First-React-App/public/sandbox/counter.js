// let count = 0;

// const addition = () => {
//     count++;
//     renderReact();
// }
// const subtraction = () => {
//     count--;
//     renderReact();
// }
// const reset = () => {
//     count = 0;
//     renderReact();
// }

// const docDiv = document.getElementById('react-div');

// const renderReact = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button id='add' className='button-add' onClick={addition}>+1</button>
//             <button id='sub' className='button-sub' onClick={subtraction}>-1</button>
//             <button id='reset' className='button-reset' onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template, docDiv);

// }

// renderReact();

class Counter extends React.Component {
    constructor(props) {

        //super must be called in order to use the this keyword.
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
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

        this.setState( (prevState) => {
            return {
                count : prevState.count - 1
            }
        } )
    }
    handleReset() {
        console.log(this);
        console.log('Handle Reset One Clicked!');

        this.setState( () => {
            return {
                count : 0
            };
        } )
    }

}

ReactDOM.render(<Counter />, document.getElementById('react-div'));