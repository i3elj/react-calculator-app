import React from "react";
import { cleanInput, cleanHistory } from "../controllers/inputHandler";
import "../style/Header.css";

const Header = () => {
    return (
        <ul id="header">
            <button onClick={() => cleanHistory()} title="Clean History">
                CH
            </button>
            <button onClick={() => cleanInput()} title="Clean Input">
                C
            </button>
            <input id="header-input"></input>
        </ul>
    );
};

export default Header;
