import "../style/App.css";
import NumPad from "./NumPad";
import Header from "./Header";

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
