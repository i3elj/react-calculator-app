import React from "react";
import NumPad from "./NumPad";
import Header from "./Header";
import "../style/App.css";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Header />
                    <NumPad />
                </div>
            </header>
        </div>
    );
};

export default App;
