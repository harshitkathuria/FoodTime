import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main container">
          <Route exact path="/register" component={Register} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
