import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Vite + React!{" "}
          <span style={{ backgroundColor: "#2F8F9D" }}>Remote application</span>
        </p>
      </header>
    </div>
  );
}

export default App;
