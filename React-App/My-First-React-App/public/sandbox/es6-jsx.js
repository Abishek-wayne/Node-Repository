//JavaScript XML

let book = {
    title: 'The Immortals of Meluah',
    subtitle: 'Where a man becomes a God',
    options: []
};

const onSubmitfunction = (e) => {

    e.preventDefault();
    let value = e.target.elements.option.value;

    if (value) {
        book.options.push(value);
        e.target.elements.option.value = '';

        renderOptions();
    }
}

function displayOptions() {
    if (book.options && book.options.length > 0) {
        return <p>Here are your options{book.options}</p>;
    } else {
        return <p>There are no options available :(</p>;
    }
}

const removeOptions = () => {
    book.options = [];
    renderOptions();
}

const reactDiv = document.getElementById('react-div');

const renderOptions = () => {
    const template = (
        <div>
            <h1>{book.title}</h1>
            {book.subtitle && <p>{book.subtitle}</p>}
            <p>{book.options.length}</p>
            {book.options && book.options.length > 0 ? 'Here are your options' : 'No Options'}
            <p><button onClick={removeOptions}>Remove All Options</button></p>
            <form onSubmit={onSubmitfunction}>
                <input type='text' className='optionText' name='option' />
                <button>Add Option</button>
            </form>
            <ol>
                {
                    book.options.map((option) => {
                        return <li key={option}>Option is {option}</li>
                    })
                }
            </ol>
        </div>
    );

    ReactDOM.render(template, reactDiv);
}

renderOptions();
// $(() => {
//     $("#add").click(() => console.log('Addition Button Clicked using jQuery!'));
// } );