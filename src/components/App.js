import React from "react";
import NumPad from "./NumPad";
import Header from "./Header";
import History from "./History";
import "../style/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <History />
        <Header />
        <NumPad />
      </header>
    </div>
  );
};

export default App;
