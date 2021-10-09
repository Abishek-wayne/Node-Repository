let count = 0;

const addition = () => {
    count++;
    renderReact();
}
const subtraction = () => {
    count--;
    renderReact();
}
const reset = () => {
    count = 0;
    renderReact();
}

const docDiv = document.getElementById('react-div');

const renderReact = () => {

    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button id='add' className='button-add' onClick={addition}>+1</button>
            <button id='sub' className='button-sub' onClick={subtraction}>-1</button>
            <button id='reset' className='button-reset' onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template, docDiv);

}

renderReact();