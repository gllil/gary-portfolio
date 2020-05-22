import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import PageFooter from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <main>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <PageFooter />
      </Router>
    </div>
  );
}

export default App;
