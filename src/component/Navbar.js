import { NavLink } from "react-router-dom";
import Category from "./Category";
const Navbar = () => {
  const navActive = ({ isActive }) => {
    return { fontWeight: isActive ? "bold" : "normal" };
  };
  return (
    <>
      <div className="navigation-bar">
        <nav className="navigation">
          <div className="nav-l">
            <NavLink to="/">
              <span className="logo"> SHOP. </span>
            </NavLink>
          </div>
          <ul className="nav-r">
            <li>
              <NavLink style={navActive} to="/about">
                {" "}
                About
              </NavLink>
            </li>
            <li>
              <NavLink style={navActive} to="/product">
                {" "}
                Product
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="searcBar">
          <input type="search" placeholder="Search product " />
        </div>
      </div>
      <div className="container">
        <Category />
      </div>
    </>
  );
};

export default Navbar;
