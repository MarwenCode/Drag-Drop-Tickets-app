import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackLog from "./components/backlog/BackLog";
import "./app.scss";
import InProgress from "./components/Inprogress/InProgress";
import Home from "./components/home/Home";

function App() {
  return (

    <Router>
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
  
    </div>
  
  </Router>
  
  );
}

export default App;
