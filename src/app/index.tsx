import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import {
  ElementPage,
  Overview,
  Transactions,
  Details,
  Settings,
  Login,
  Register,
} from "../pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ElementPage />} />
          <Route path="/member" element={<Overview />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
