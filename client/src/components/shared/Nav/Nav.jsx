import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav-div">
      <p>Here is our Navo</p>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
    </div>
  );
}

export default Nav;
