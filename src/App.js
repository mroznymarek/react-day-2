import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Views/Home'
import Calculators from './Views/Calculators'
import DisplayName from './Views/DisplayName'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculators">Calculators</Link>
          </li>
        </ul>
      </div>

      <Route exact={true} path={"/"} component={Home} />
      <Route path={"/calculators"} component={Calculators} />
      <Route path={"/display-name/:name?"} component={DisplayName} />
    </Router>
  )
}

export default App;
