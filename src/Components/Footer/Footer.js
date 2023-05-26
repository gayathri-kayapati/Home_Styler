import { NavLink } from "react-router-dom";

import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <section className="footerSection">
        <div className="sectionChild">
          <h4>HELP</h4>
          <p>Shipping and Return Policy</p>
          <p>Help Center</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="sectionChild  policies">
          <p>Privacy Policy</p>
          <p>Responsible Disclosure</p>
        </div>
        <div className="sectionChild icons">
          <h4>FOLLOW US</h4>
          <NavLink
            className="socialMediaIcons"
            target="_blank"
            to="https://www.instagram.com/feed/"
          >
            <BsInstagram />
          </NavLink>
          <NavLink
            className="socialMediaIcons"
            target="_blank"
            to="https://www.facebook.com/feed/"
          >
            <AiOutlineFacebook />
          </NavLink>
        </div>
      </section>
      <section>
        <p>&copy; 2023 | Home Styler Pvt. Ltd. | All Rights Reserved</p>
      </section>
    </div>
  );
}
