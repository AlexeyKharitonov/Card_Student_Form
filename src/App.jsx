import { Route, Switch } from "react-router-dom";
import CardOfStudent from "./components/pages/cardOfStudent";
import Edit from "./components/pages/edit";
import Create from "./components/pages/create";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/create" component={Create} />
        <Route path="/edit" component={Edit} />
        <Route path="/edit" component={Edit} />
        <Route path="/" exact component={CardOfStudent} />
      </Switch>
    </div>
  );
}

export default App;
