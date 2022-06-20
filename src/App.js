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
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state?.currentUser?.currentUser?.uid
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user));
      setIsLoading(false);
    });
    <Navigate to="/" />;
    console.log(currentUser);
  }, [auth]);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="home" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="home" element={<Home />} />
          <Route
            index
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
