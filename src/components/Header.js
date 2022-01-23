import "../style/Header.css";
import { cleanInput } from '../controllers/inputHandler'

const Header = () => {
    return (
        <ul id="header">
            <button onClick={() => cleanInput()}>AC</button>
            <button onClick={() => cleanInput()}>C</button>
            <input id="header-input"></input>
        </ul>
    );
};

export default Header;