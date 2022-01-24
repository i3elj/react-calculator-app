import React from "react";
import { getValue, evaluateExpression } from "../controllers/inputHandler.js";
import "../style/NumPad.css";

const NumPad = () => {
    return (
        <ul id="numpad">
            <button onClick={() => getValue("7")}>7</button>
            <button onClick={() => getValue("8")}>8</button>
            <button onClick={() => getValue("9")}>9</button>
            <button onClick={() => getValue("/")}>/</button>
            <button onClick={() => getValue("4")}>4</button>
            <button onClick={() => getValue("5")}>5</button>
            <button onClick={() => getValue("6")}>6</button>
            <button onClick={() => getValue("*")}>*</button>
            <button onClick={() => getValue("1")}>1</button>
            <button onClick={() => getValue("2")}>2</button>
            <button onClick={() => getValue("3")}>3</button>
            <button onClick={() => getValue("-")}>-</button>
            <button onClick={() => getValue(",")}>,</button>
            <button onClick={() => getValue("0")}>0</button>
            <button onClick={() => evaluateExpression()}> = </button>
            <button onClick={() => getValue("+")}>+</button>
        </ul>
    );
};

export default NumPad;
