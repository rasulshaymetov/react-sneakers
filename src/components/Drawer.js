import remove from '../img/remove.svg'
import arrow from '../img/arrow.svg'
import item00 from '../img/sneakers/item00.svg'

function Drawer(){
    return (
        <div style={{display:'none'}} className='overlay'>
        <div className='drawer'>
      <h2 className='mb-30 d-flex justify-between '>
        Корзина
        <img className='cu-p' src={remove}></img>
        </h2>
        <div className='items'>

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

      <div className='cartItem d-flex align-center mb-20'>

<img src={item00} width={70} height={70} /> 
  <div className='mr-20'>
    <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
    <b>12 999 руб.</b>
  </div>
  <img className='removeBtn' src={remove}></img>
</div>


    
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
      </div>
      </div>
    )
}

export default Drawer;