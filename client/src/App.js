import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
