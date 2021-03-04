import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Detail from "./screens/Detail/Detail.jsx";
import Add from "./screens/Add/Add.jsx";
import Edit from "./screens/Edit/Edit";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={Detail} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit/:id" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
