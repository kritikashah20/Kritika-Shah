import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { navRoutes } from "./Data/navRoutes";

import Preloader from "../src/components/Pre";
import NavbarFinal from "./components/NavbarFinal";
const FooterF = lazy(() => import("./components/FooterF"));

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavbarFinal />
        <Suspense fallback={<Preloader load={true} />}>
          <Routes>
            {navRoutes.map((item, index) => (
              <Route path={item.to} element={<item.comp />} />
            ))}
          </Routes>
          <FooterF />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
