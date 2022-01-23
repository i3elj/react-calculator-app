import "../style/NumPad.css";
import { addValue } from "../controllers/addValue.js";

const NumPad = () => {
    return (
        <ul id="numpad">
            <button onClick={addValue(this)}>7</button>
            <button onClick={addValue(this)}>8</button>
            <button onClick={addValue(this)}>9</button>
            <button onClick={addValue(this)}>/</button>
            <button onClick={addValue(this)}>4</button>
            <button onClick={addValue(this)}>5</button>
            <button onClick={addValue(this)}>6</button>
            <button onClick={addValue(this)}>*</button>
            <button onClick={addValue(this)}>1</button>
            <button onClick={addValue(this)}>2</button>
            <button onClick={addValue(this)}>3</button>
            <button onClick={addValue(this)}>-</button>
            <button onClick={addValue(this)}>,</button>
            <button onClick={addValue(this)}>0</button>
            <button onClick={addValue(this)}>=</button>
            <button onClick={addValue(this)}>+</button>
        </ul>
    );
};

export default NumPad;
