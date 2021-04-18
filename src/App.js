import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Contacts } from "./pages/Contacts";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contacts" component={Contacts} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </SimpleBar>
  );
}

export default App;
