import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import {
  ElementPage,
  Overview,
  Transactions,
  Details,
  Settings,
  Login,
  Register,
  RegisterPhoto,
  RegisterSuccess,
  Page404,
  LandingPage,
  CheckoutPage,
} from "../pages";
import DetailPage from "../pages/front/detailPage";
import CheckoutSuccess from "../pages/front/checkoutSuccess";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/member" element={<Overview />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-photo" element={<RegisterPhoto />} />
          <Route path="/register-success" element={<RegisterSuccess />} />
          <Route path="/game/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
