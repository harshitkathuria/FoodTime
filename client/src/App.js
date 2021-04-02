import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthHome from "./components/AuthHome";
import DishCards from "./components/Restaurant&Dishes/DishCards";

import "./App.css";
import AlertState from "./context/alert/AlertState";
import ResState from "./context/restaurant/ResState";
import PrivateRoute from "./components/utils/PrivateRoute";
import setAuthToken from "./components/utils/setAuthToken";
import AllRestaurants from "./components/Restaurant&Dishes/AllRestaurants";
import NotFound from "./components/NotFound";
import AuthContext from "./context/auth/authContext";
import SideNav from "./components/layout/SideNav";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.token);
}

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="App">
      <AlertState>
        <ResState>
          <Router>
            <Navbar />
            <SideNav />
            <div className="main" style={{ margin: "0 1rem" }}>
              <Switch>
                {isAuthenticated !== null && (
                  <Route exact path="/" component={Home} />
                )}
                {isAuthenticated !== null && (
                  <Route exact path="/register" component={Register} />
                )}
                {isAuthenticated !== null && (
                  <Route exact path="/login" component={Login} />
                )}
                <PrivateRoute exact path="/home" component={AuthHome} />
                <PrivateRoute
                  exact
                  path="/res/all"
                  component={AllRestaurants}
                />
                <PrivateRoute exact path="/res/:id" component={DishCards} />
                {isAuthenticated !== null && (
                  <Route path="*" component={NotFound} />
                )}
              </Switch>
            </div>
            <Footer />
          </Router>
        </ResState>
      </AlertState>
    </div>
  );
}

export default App;
