//JavaScript XML

var book = {
    title : 'The Immortals of Meluah',
    subtitle : 'Where a man becomes a God',
    options: ['One','Two','Three']
};

var template = (
    <div>
    <h1>{book.title}</h1>
     {book.subtitle && <p>{book.subtitle}</p>}
    {displayOptions()}
    {book.options && book.options.length > 0 ? 'Here are your options' : 'No Options' }
    </div>
);

function displayOptions(){
    if( book.options && book.options.length > 0 ){
        return <p>Here are your options{book.options}</p>;
    }else{
        return <p>There are no options available :(</p>;
    }
}

var templateTwo = (
<div>
    <h1>
    Abishek Dinesh
    </h1>
    <p>Age: 23</p>
    <p>Location: Hyderabad</p>
    <h2>Hobbies</h2>
    <ol>
    <li>Playing Games</li>
    <li>Reading Books</li>
    </ol>
</div>
);

var docDiv = document.getElementById('react-div');

ReactDOM.render(template,docDiv);