import logo from './/img/logo.svg'
import cart from './/img/cart.svg'
import user from './/img/user.svg'

function App() {
  return (
    <div className="wrapper">
      <header>
      <div className="headerLeft" >
        <img width={40} height={40} src={logo}/>
        <div className="headerInfo" >
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
       </div>
      </div>
        <ul className="headerRight">
          <li><img width={18} height={18} src={cart}/><span>1205 руб.</span></li>
          <li><img width={18} height={18} src={user}/></li>
        </ul>
        </header>
        <div className="content">
          <h1>Все кроссовки</h1>
          ...
        </div>
    </div>
  );
}

export default App;
