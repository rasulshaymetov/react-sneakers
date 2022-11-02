import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./components/pages/Home";
import Favourites from "./components/pages/Favourites";
import AppContext from "./context";
import { Profile } from "./components/pages/Profile";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favouriteResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://63564d3da2d1844a97714a39.mockapi.io/cart"),
            axios.get("https://63564d3da2d1844a97714a39.mockapi.io/favourites"),
            axios.get("https://63564d3da2d1844a97714a39.mockapi.io/items"),
          ]);
        // const cartResponse = await axios.get('https://63564d3da2d1844a97714a39.mockapi.io/cart')
        // const favouriteResponse = await axios.get('https://63564d3da2d1844a97714a39.mockapi.io/favourites')
        // const itemsResponse = await axios.get('https://63564d3da2d1844a97714a39.mockapi.io/items')

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
        setFavourite(favouriteResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных ");
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://63564d3da2d1844a97714a39.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://63564d3da2d1844a97714a39.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Произошла ошибка при запросе данных");
    }
  };
  const onRemoveItem = async (id) => {
    try {
      axios.delete(`https://63564d3da2d1844a97714a39.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Произошла ошибка при удалении из корзины");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToFavourite = async (obj) => {
    try {
      if (favourite.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63564d3da2d1844a97714a39.mockapi.io/favourites/${obj.id}`
        );
        setFavourite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://63564d3da2d1844a97714a39.mockapi.io/favourites",
          obj
        );
        setFavourite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалость выполнить запрос!");
    }
  };
  const [cartOpened, setCartOpened] = useState(false);

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.parentId === id);
  };
  return (
    <AppContext.Provider
      value={{
        cartItems,
        onAddToCart,
        favourite,
        items,
        isItemAdded,
        onAddToFavourite,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header
          onClickCart={() => setCartOpened(true)}
          onCloseCart={() => setCartOpened(false)}
        />
        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavourite={onAddToFavourite}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favourites" exact>
          <Favourites />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
