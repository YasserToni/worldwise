import { NavLink } from "react-router-dom";
import style from './PageNav.module.css'
import Logo from "./Logo";

function PageNav() {
  return (
    <div className={style.nav} >
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
