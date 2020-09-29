import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import PageFooter from "./components/Footer";
import Admin from "./components/pages/Admin";
import { AuthProvider } from "./Auth";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <main>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </main>
        <PageFooter />
      </Router>
    </AuthProvider>
  );
}

export default App;
