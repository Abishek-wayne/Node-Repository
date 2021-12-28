import React from 'react';
import { useSearchParams } from 'react-router-dom';

const EditExpensepage = (props) => {

    let [params] = useSearchParams();

    console.log(props);
    console.log(params);

    return (
        <p>This is edit Expense page with id: {params.getAll("id")}</p>
    );
}

export { EditExpensepage };