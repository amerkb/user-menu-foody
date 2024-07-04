import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Page/Menu";
import Content from "./Layout/Content";

function App() {
  // window.host = "http://192.168.1.111:8000/api";
  window.host = "http://192.168.43.117:8000/api";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/menu" element={<Content content="Menu" />} />
        </Routes>
        <Routes>
        <Route path="/cart" element={<Content content="Cart" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
