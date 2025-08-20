import {Link} from "react-router-dom";
import "../Css/NavBar.css";
import { BsHouseDoorFill } from "react-icons/bs";


export default function NacBar() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          {""}
          <li>
            <Link to="/">
              {" "}
              <BsHouseDoorFill /> Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/forecast"> Forecast</Link>{" "}
          </li>
          <li>
            <Link to="/budget">
              {" "}
              
              Budget
            </Link>{" "}
          </li>
        </ul>
      </nav>
    );

}