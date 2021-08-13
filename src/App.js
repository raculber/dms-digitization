import Home from "./components/Home/Home";
import BerrySt from "./components/BerrySt/BerrySt";
import ChickNQuick from "./components/Chick-N-Quick/ChickNQuick";
import Cumming from "./components/Cumming/Cumming";
import Monett from "./components/Monett/Monett";
import Noel from "./components/Noel/Noel";

import { Switch, Route } from "react-router-dom";
import Evisceration from "./components/BerrySt/Sections/Evisceration";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/berry-st" exact>
        <BerrySt />
      </Route>
      <Route path="/berry-st/evisceration">
        <Evisceration />
      </Route>
      <Route path="/chick-n-quick">
        <ChickNQuick />
      </Route>
      <Route path="/cumming">
        <Cumming />
      </Route>
      <Route path="/monett">
        <Monett />
      </Route>
      <Route path="/noel">
        <Noel />
      </Route>
    </Switch>
  );
}

export default App;
