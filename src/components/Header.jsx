import React, { useContext } from "react";
import logo from "../img/logo.svg";
import cart from "../img/cart.svg";
import user from "../img/user.svg";
import { Link } from "react-router-dom";
import favourite from "../img/favourite.svg";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center cu-p">
          <img width={40} height={40} src={logo} alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src={cart} alt="Cart" />
          <span>{`${totalPrice} руб.`}</span>
        </li>
        <Link to="/favourites">
          <li>
            <img width={18} height={18} src={favourite} alt="favourite" />
          </li>
        </Link>
        <Link to='/profile'>
        <li>
          <img width={18} height={18} src={user} alt="user" />
        </li>
        </Link>
      </ul>
    </header>
  );
}
export default Header;
