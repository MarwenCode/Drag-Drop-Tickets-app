import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackLog from "./components/backlog/BackLog";
import Modal from "./components/modal/Modal";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BackLog />} />
          <Route path="/modal/:id" element={<Modal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
