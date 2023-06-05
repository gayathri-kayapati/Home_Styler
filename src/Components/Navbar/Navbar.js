import { NavLink } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import SearchBar from "../Searchbar/SearchBar";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <section>
        <NavLink className="nav-brand" to="/">
          Home Styler
        </NavLink>
      </section>
      <section>
        <SearchBar />
      </section>
      <section>
        <NavLink className="navpill" to="/cart">
          <BsCart3 />
          <span className="tooltip">Cart</span>
        </NavLink>
        <NavLink className="navpill" to="/wishlist">
          <AiOutlineHeart />
          <span className="tooltip">Wishlist</span>
        </NavLink>
        <NavLink className="navpill" to="/profile">
          <MdOutlineAccountCircle />
          <span className="tooltip">Profile</span>
        </NavLink>
      </section>
    </nav>
  );
}
