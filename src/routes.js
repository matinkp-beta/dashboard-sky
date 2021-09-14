import React from "react";
import { Route } from "react-router-dom";

import Test from "./components/dasboard";
import Dashboard2 from "./components/dashboard2";
import Dashboard3 from "./components/dashboard3";


const BaseRouter = () => (
  <div>
    <Route exact path="/dash/" component={Test} />
    <Route exact path="/dash2/" component={Dashboard2} />
    <Route exact path="/dash3/" component={Dashboard3} />

  </div>
);

export default BaseRouter;
