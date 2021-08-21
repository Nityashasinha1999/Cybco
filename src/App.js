/** @format */

import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Home from "./views/home/home";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Switch>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
