import remove from '../img/remove.svg'
import arrow from '../img/arrow.svg'
import emptyCart from '../img/cart-empty.jpg'
// import test from '../../public/img/sneakers.1.jpg'
import test from '../img/sneakers/1.jpg'

function Drawer({onClose, onRemove, items = []}){
    return (
        <div className='overlay'>
          <div onClick={onClose} className='left-content'></div>
        <div className='drawer'>
      <h2 className='mb-30 d-flex justify-between '>
        Корзина
        <img onClick={onClose}  className='cu-p' src={remove}></img>
        </h2>

         {
           items.length == 0 ?   (<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
           <img className='mb-20' width='120px' height='120px'src={emptyCart}></img>
           <h2>Корзина пустая</h2>
           <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
           <button onClick={onClose} className='greenButton'>
             <img src={arrow} />
             Вернуться назад
           </button>
           </div> ) : (<div>
            <div className='items'>
          {items.map((obj) =>
      <div className='cartItem d-flex align-center mb-20'>
        <img className='cartItemImg' src={obj.cartImage}></img>
      {/* <div
      style={{backgroundImage: `url(${obj.cartImage})`,}}
       className='cartItemImg'></div>  */}
        <div className='mr-20'>
          <p className='mb-5'>{obj.title}</p>
          <b>{obj.price} руб.</b>
        </div>
        <img onClick={() => onRemove(obj.id)} className='removeBtn' src={remove}></img>
      </div>  )}
        </div>
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
           </div>)
         }

      
        
      
      </div>
      </div>
    )
}

export default Drawer;