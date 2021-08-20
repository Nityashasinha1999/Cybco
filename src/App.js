/** @format */

import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
