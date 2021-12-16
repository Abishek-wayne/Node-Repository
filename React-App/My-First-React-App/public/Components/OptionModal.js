import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
    isOpen={props.options}
    onRequestClose={props.removeSelectedOption}
    >
    <h1>Selected Option</h1>
    {props.selectedOption}
    <button onClick={props.removeSelectedOption}>Close</button>
    </Modal>
    );


export {OptionModal};