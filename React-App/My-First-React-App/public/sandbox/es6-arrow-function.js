const firstName = (name) => {
    return name.split(' ')[0];
}

console.log('FirstName from Basic Arrow Function', firstName("Abishek Dinesh"));

const firstNamearrow = (name) => name.split(' ')[0];

console.log('FirstName from arrow function syntax', firstNamearrow('Anurag Dinesh'));