import "./styles/global-styles.scss";
import "./styles/global-variables.scss";
import "./styles/css-reset.scss";
import Home from "./pages/home/Home.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Customer from "./pages/customer/Customer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "./utils/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentUser } from "./utils/redux/currentUserSlice";
import { useState } from "react";
import Loading from "./components/loading/Loading.jsx";

function App() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user));
      setIsLoading(false);
      localStorage.setItem(
        "currentUser",
        JSON.stringify(user?.stsTokenManager.accessToken)
      );
    });

    console.log(currentUser);
  }, [auth]);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="home" />;
  };
  console.log(currentUser);

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
