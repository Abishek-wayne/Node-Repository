'use strict';

var visible = false;

var toggleVisibility = function toggleVisibility() {
    visible = !visible;
    renderToggle();
};

var renderToggle = function renderToggle() {

    var body = document.getElementById('react-div');
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            React.createElement(
                'b',
                null,
                'Visibility Toggle'
            )
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visible ? 'Hide Details' : 'Show Details'
        ),
        visible && React.createElement(
            'p',
            null,
            'This is the details that you want to display!'
        )
    );

    ReactDOM.render(template, body);
};
renderToggle();
