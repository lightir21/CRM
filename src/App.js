import "./styles/global-styles.scss";
import "./styles/global-variables.scss";
import "./styles/css-reset.scss";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Customer from "./pages/customer/Customer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
