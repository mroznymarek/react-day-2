import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Views/Home'
import Calculators from './Views/Calculators'
import DisplayName from './Views/DisplayName'
import MUIPlayground from './Views/MUIPlayground'
import Navigation from './Views/Navigation'

const App = () => {
  return (
    <Router>
      <Navigation />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculators">Calculators</Link>
          </li>
          <li>
            <Link to="/mui">MUIPlayground</Link>
          </li>
        </ul>
      </div>

      <Route exact={true} path={"/"} component={Home} />
      <Route path={"/calculators"} component={Calculators} />
      <Route path={"/display-name/:name?"} component={DisplayName} />
      <Route path={"/mui"} component={MUIPlayground} />
    </Router>
  )
}

export default App;
