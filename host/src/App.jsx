import logo from "./logo.svg";
import "./App.css";
import { Button } from "siva/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Vite + React!{" "}
          <span style={{ backgroundColor: "#2F8F9D" }}>Host application</span>
        </p>
        <Button />
      </header>
    </div>
  );
}

export default App;
