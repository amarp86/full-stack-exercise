import "./Nav.css";

import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav-div">
      <Link to="/">
        <div className="nav-title">Blog-o App-o</div>
      </Link>
      <div className="nav-links">
        <div className="nav-link-home">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link-add">
          <Link to="/add">Add</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
