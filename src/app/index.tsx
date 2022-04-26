import { ElementPage, Overview } from "../pages";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ElementPage />} />
          <Route path="/member" element={<Overview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
