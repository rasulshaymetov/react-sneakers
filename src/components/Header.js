import React from 'react'
import logo from '../img/logo.svg'
import cart from '../img/cart.svg'
import user from '../img/user.svg'
import plus from '../img/plus.svg'
import favourite from '../img/favourite.svg'

function Header(){    
  return(
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
  )
}
export default Header;