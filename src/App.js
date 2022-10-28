import {useEffect, useState} from 'react';
import {Route} from "react-router-dom"
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './components/pages/Home';
import Favourites from './components/pages/Favourites';


function App() {
  const [cartItems, setCartItems] = useState([
    
])
  const [searchValue, setSearchValue] = useState('')
  const [items, setItems] = useState([])
  const [favourite, setFavourite] = useState([])


 useEffect(() => {
  axios.get('https://63564d3da2d1844a97714a39.mockapi.io/items').then((res) => {
    setItems(res.data)
  });
  axios.get('https://63564d3da2d1844a97714a39.mockapi.io/cart').then((res) => {
    setCartItems(res.data)
  });
  axios.get('https://63564d3da2d1844a97714a39.mockapi.io/favourites').then((res) => {
    setFavourite(res.data)
  });
 }, [])

 const onAddToCart = (obj) => {
  axios.post('https://63564d3da2d1844a97714a39.mockapi.io/cart', obj)
  setCartItems(prev => [...prev, obj])
}
  const onRemoveItem = (id) => {
 axios.delete(`https://63564d3da2d1844a97714a39.mockapi.io/cart/${id}`)
 setCartItems((prev) => prev.filter(item => item.id !== id))
} 

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  const onAddToFavourite = async (obj) => {
    try{
      if(favourite.find((favObj) => favObj.id === obj.id )){
        axios.delete(`https://63564d3da2d1844a97714a39.mockapi.io/favourites/${obj.id}`)
        setFavourite((prev) => prev.filter((item) => item.id !== obj.id))
      }
      else{
        const {data} = await axios.post('https://63564d3da2d1844a97714a39.mockapi.io/favourites', obj)
        setFavourite(prev => [...prev, data])
      }
    }
    catch(error){
      alert('Не удалость выполнить запрос!')
    }
   
  }
  const [cartOpened, setCartOpened] = useState(false)

  return (
    <div className="wrapper clear">
    
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> }
      <Header onClickCart={() => setCartOpened(true)} onCloseCart={() => setCartOpened(false)} />

      <Route path='/' exact>
        <Home items={items}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToCart={onAddToCart}
        onAddToFavourite={onAddToFavourite}
        />
      </Route>
      <Route path='/favourites' exact>
        <Favourites items={favourite} onAddToFavourite={onAddToFavourite}/>
      </Route>
        
       
    </div>
  );
}

export default App;
