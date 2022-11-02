import Card from "../Card";
import React from "react";
import AppContext from "../../context";

function Favourites() {
  const { favourite, onAddToFavourite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between  mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favourite.map((item, index, zero = 0) => (
          <Card
            key={index}
            favourited={true}
            onFavourite={onAddToFavourite}
            id={zero++}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favourites;
