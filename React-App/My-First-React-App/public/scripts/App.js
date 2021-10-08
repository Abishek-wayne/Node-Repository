'use strict';

//JavaScript XML

var book = {
    title: 'The Immortals of Meluah',
    subtitle: 'Where a man becomes a God',
    options: ['One', 'Two', 'Three']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        book.title
    ),
    book.subtitle && React.createElement(
        'p',
        null,
        book.subtitle
    ),
    displayOptions(),
    book.options && book.options.length > 0 ? 'Here are your options' : 'No Options'
);

function displayOptions() {
    if (book.options && book.options.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here are your options',
            book.options
        );
    } else {
        return React.createElement(
            'p',
            null,
            'There are no options available :('
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Abishek Dinesh'
    ),
    React.createElement(
        'p',
        null,
        'Age: 23'
    ),
    React.createElement(
        'p',
        null,
        'Location: Hyderabad'
    ),
    React.createElement(
        'h2',
        null,
        'Hobbies'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Playing Games'
        ),
        React.createElement(
            'li',
            null,
            'Reading Books'
        )
    )
);

var docDiv = document.getElementById('react-div');

ReactDOM.render(template, docDiv);
