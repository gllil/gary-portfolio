import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import Footer from './components/Footer'


function App() {
  return (
    <div>
    <main>
    <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </main>
    <Footer />
    </div>
  );
}

export default App;
