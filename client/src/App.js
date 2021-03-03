import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Detail from "./screens/Detail.jsx";
import Add from "./screens/Add.jsx";
import Edit from "./screens/Edit";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={Detail} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit/:id" component={Edit} />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/add-product" component={ProductCreate} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/:id" component={ProductDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
