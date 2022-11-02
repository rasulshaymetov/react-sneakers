import remove from "../../img/remove.svg";
import arrow from "../../img/arrow.svg";
import Info from "../Info";
import emptyCart from "../../img/cart-empty.jpg";
import orderComplete from "../../img/order-complete.jpg";
import { useState } from "react";
import axios from "axios";
import { useCart } from "../../hooks/useCart";
import styles from "./Drawer.module.scss"

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { setCartItems, cartItems, totalPrice } = useCart();

  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63564d3da2d1844a97714a39.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://63564d3da2d1844a97714a39.mockapi.io/cart/" + item.id
        );
      }

      setIsCompleted(true);
      setCartItems([]);
    } catch (error) {
      alert("Ошибка при создании заказа");
    }
    setIsLoading(false);
  };
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div onClick={onClose} className="left-content"></div>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between ">
          Корзина
          <img
            onClick={onClose}
            className="cu-p"
            src={remove}
            alt="Remove"
          ></img>
        </h2>
        {items.length === 0 ? (
          <Info
            title={isCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isCompleted ? orderComplete : emptyCart}
          />
        ) : (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <img
                    className="cartItemImg"
                    src={obj.cartImage}
                    alt="CartItemImage"
                  ></img>
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src={remove}
                    alt="Remove"
                  ></img>
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.floor(totalPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ <img src={arrow} alt="Arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
