import { NavLink } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";

export default function Navbar() {
  return (
    <div>
      <NavLink className="nav-brand" to="/">
        Home Styler
      </NavLink>
      <SearchBar />
      <NavLink to="/cart">Cart</NavLink> ||
      <NavLink to="/wishlist">Wishlist</NavLink> ||
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
}
