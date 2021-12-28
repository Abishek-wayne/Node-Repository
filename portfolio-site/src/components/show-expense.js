import React from "react";
import { useSearchParams } from "react-router-dom";

const ShowExpense = (props) => {

    let [params] = useSearchParams();

    return (
        <p>This is the id: {params.getAll("id")}</p>
    );
}

export { ShowExpense };