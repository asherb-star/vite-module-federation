import logo from "./logo.svg";
import "./App.css";
import { Button } from "siva/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! Host application </p>
        <Button />
      </header>
    </div>
  );
}

export default App;
