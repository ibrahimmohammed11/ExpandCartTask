import { Component, Fragment } from "react";
import img from "../../images/1.png";
import { Link } from "react-router-dom";
import Styles from "./Styles.module.css";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light bg-white">
          <Link to="/" className="navbar-brand">
            <img src={img} alt="expandcart" className={Styles.imgStyle} />
          </Link>
          <div className="ml-auto"></div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
