import React, { useState } from "react";
import unliked from "../img/unliked.svg";
import liked from "../img/liked.svg";
import plus from "../img/plus.svg";
import check from "../img/check.svg";
import styles from "../UI/Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Card({
  id,
  title,
  price,
  imageUrl,
  cartImage,
  onFavourite,
  onPlus,
  favourited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [favourite, setFavourite] = useState(favourited);
  // const obj = {id, parentId:id, title, imageUrl, price}


  const onClickPlus = () => {
    onPlus({id, parentId:id, title, imageUrl, price, cartImage});
  };

  const onClickFavourite = () => {
    onFavourite({id, parentId:id, title, imageUrl, price});
    setFavourite(!favourite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={500}
          height={200}
          viewBox="0 0 500 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="94" y="83" rx="0" ry="0" width="3" height="0" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="106" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="125" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="158" rx="8" ry="8" width="80" height="24" />
          <rect x="124" y="154" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavourite && (
            <div onClick={onClickFavourite} className="favourite">
              <img
                className="cu-p"
                src={favourite ? liked : unliked}
                alt="Favourites"
              />
            </div>
          )}
          <img width="100%" height={135} src={imageUrl} alt="CardImage" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? check : plus}
                alt="AddToCard"
              />
            )}
          </div>
          <div style={{ display: "none" }}>{cartImage}</div>
        </>
      )}
    </div>
  );
}

export default Card;
