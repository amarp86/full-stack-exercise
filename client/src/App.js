import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

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
