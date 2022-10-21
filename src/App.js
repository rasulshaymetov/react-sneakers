import logo from './/img/logo.svg'
import cart from './/img/cart.svg'
import user from './/img/user.svg'
import plus from './/img/plus.svg'
import item from './/img/sneakers/item00.svg'


function App() {
  return (
    <div className="wrapper clear">
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
          <li><img width={18} height={18} src={user}/></li>
        </ul>
        </header>
        <div className="content p-40">
          <h1 className='mb-40'>Все кроссовки</h1>
      <div className='d-flex'>
          <div className="card">
            <img width={133} height={112} src={item}/>
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
            <img width={133} height={112} src={item}/>
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
            <img width={133} height={112} src={item}/>
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
