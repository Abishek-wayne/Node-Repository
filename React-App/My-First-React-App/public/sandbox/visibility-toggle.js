let visible = false;

const toggleVisibility = () => {
    visible = !visible;
    renderToggle();
}

const renderToggle = () => {

    const body = document.getElementById('react-div');
    const template = (
        <div>
            <h1><b>Visibility Toggle</b></h1>
            <button onClick={toggleVisibility}>{visible ? 'Hide Details':'Show Details'}</button>
            {visible && <p>This is the details that you want to display!</p>}
        </div>
    );

    ReactDOM.render(template, body);
}
renderToggle();