import logo from './/img/logo.svg'
import cart from './/img/cart.svg'
import user from './/img/user.svg'
import plus from './/img/plus.svg'
import favourite from './/img/favourite.svg'
import search from './/img/search.svg'
import unliked from './/img/unliked.svg' 
import remove from './/img/remove.svg'
import arrow from './/img/arrow.svg'
import item00 from './/img/sneakers/item00.svg'


function App() {
  return (
    <div className="wrapper clear">

    <div className='overlay'>
      <div className='drawer'>
      <h2 className='mb-30' >Корзина</h2>

      <div className='cartItem d-flex align-center mb-20'>

      <img src={item00} width={70} height={70} /> 
        <div className='mr-20'>
          <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <b>12 999 руб.</b>
        </div>
        <img className='removeBtn' src={remove}></img>
      </div>
      <div className='cartItem d-flex align-center mb-20'>

      <img src={item00} width={70} height={70} /> 
        <div className='mr-20'>
          <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <b>12 999 руб.</b>
        </div>
        <img className='removeBtn' src={remove}></img>
      </div>
      <div className='items'>
        <div className='cartTotalBlock'>
            <ul>        
              <li className='d-flex'>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className='d-flex'>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className='greenButton'>Оформить заказ <img src={arrow}/></button>
            </div>
        </div>


      </div>
    </div>

      <header className='d-flex justify-between align-center p-40'>
      <div className="d-flex align-center" >
        <img width={40} height={40} src={logo}/>
        <div>
          <h3 className='text-uppercase'>React Sneakers</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
       </div>
      </div>
        <ul className="d-flex">
          <li className='mr-30' ><img width={18} height={18} src={cart}/><span>1205 руб.</span></li>
          <li><img width={18} height={18} src={favourite} /></li>
          <li><img width={18} height={18} src={user}/></li>
        </ul>
        </header>
        <div className="content p-40">
          <div className='d-flex align-center justify-between  mb-40' >
          <h1 className=''>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src={search} alt='Search'/>
            <input type='text' placeholder='Поиск' className='search-input' />
          </div>
          </div>
          
      <div className='d-flex'>

          <div className="card">
            <div className="favourite">
              <img src={unliked}/>
            </div>
            <img width={133} height={112} src={item00}/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className='d-flex justify-between align-center' >
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                  </div>
                  <button className='button'>
                    <img width={11} height={11} src={plus}/>
                  </button>
                  </div> 
            </div>
            <div className="card">
            <div className="favourite">
              <img src={unliked}/>
            </div>
            <img width={133} height={112} src={item00}/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className='d-flex justify-between align-center' >
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                  </div>
                  <button className='button'>
                    <img width={11} height={11} src={plus}/>
                  </button>
                  </div> 
            </div>
            <div className="card">
            <div className="favourite">
              <img src={unliked}/>
            </div>
            <img width={133} height={112} src={item00}/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className='d-flex justify-between align-center' >
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                  </div>
                  <button className='button'>
                    <img width={11} height={11} src={plus}/>
                  </button>
                  </div> 
            </div>


           

      </div>
            
        </div>
    </div>
  );
}

export default App;
