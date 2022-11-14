import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackLog from "./components/backlog/BackLog";
import "./app.scss"

function App() {
  return (
    <div className="App">
      <h1>Title project</h1>
      <BackLog />
      
    </div>
  );
}

export default App;
