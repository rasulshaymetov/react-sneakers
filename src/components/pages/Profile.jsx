import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import AppContext from "../../context";

export const Profile = () => {
  const { onAddToFavourite, onAddToCart } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63564d3da2d1844a97714a39.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false)
      } catch (error) {
        alert("Ошибка при запросе заказа");
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between  mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {orders.map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
