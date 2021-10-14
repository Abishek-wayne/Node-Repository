// let visible = false;

// const toggleVisibility = () => {
//     visible = !visible;
//     renderToggle();
// }

// const renderToggle = () => {

//     const body = document.getElementById('react-div');
//     const template = (
//         <div>
//             <h1><b>Visibility Toggle</b></h1>
//             <button onClick={toggleVisibility}>{visible ? 'Hide Details':'Show Details'}</button>
//             {visible && <p>This is the details that you want to display!</p>}
//         </div>
//     );

//     ReactDOM.render(template, body);
// }
// renderToggle();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle Class Component</h1>
                <h2>This is visibility toggle</h2>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide Para' : 'Show Para'}</button>
                {this.state.visibility && <p>This is the para that you want to display!</p>}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('react-div'));