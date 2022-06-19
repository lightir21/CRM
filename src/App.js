import "./styles/global-styles.scss";
import "./styles/global-variables.scss";
import "./styles/css-reset.scss";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Customer from "./pages/customer/Customer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "./utils/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentUser } from "./utils/redux/currentUserSlice";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state?.currentUser?.currentUser?.uid
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user));
    });
    console.log(currentUser);
  }, []);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={currentUser ? <Dashboard /> : <Home />} />
          <Route
            path="dashboard"
            element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }
          />
          <Route
            path="customer"
            element={
              <RequiredAuth>
                <Customer />
              </RequiredAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
