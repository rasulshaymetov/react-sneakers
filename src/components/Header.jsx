import React from 'react'
import logo from '../img/logo.svg'
import cart from '../img/cart.svg'
import user from '../img/user.svg'
import {Link} from 'react-router-dom'
import plus from '../img/plus.svg'
import favourite from '../img/favourite.svg'

function Header(props){    
  return(
        <header className='d-flex justify-between align-center p-40'>
    <Link to='/'>
    <div className="d-flex align-center cu-p" >
      <img width={40} height={40} src={logo}/>
      <div>
        <h3 className='text-uppercase'>React Sneakers</h3>
        <p className='opacity-5'>Магазин лучших кроссовок</p>
     </div>
    </div>
    </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className='mr-30 cu-p' ><img width={18} height={18} src={cart}/><span>1205 руб.</span></li>
        <Link to="/favourites">
          <li>
            <img width={18} height={18} src={favourite} />
          </li>
        </Link>
        <li><img width={18} height={18} src={user}/></li>
      </ul>
      </header>
  )
}
export default Header;