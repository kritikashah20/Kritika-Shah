import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Preloader from "../src/components/Pre";
import NavbarFinal from "./components/NavbarFinal";
import ScrollToTop from "./components/ScrollToTop";

import FooterF from "./components/FooterF";

import { navRoutes } from "./Data/navRoutes";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavbarFinal />
        <ScrollToTop />
        <Switch>
          {navRoutes.map((item, index) => (
            <Route path={item.to} exact={item.exact} component={item.comp} />
          ))}
        </Switch>
        <FooterF />
      </div>
    </Router>
  );
}

export default App;
