import React from 'react'
import unliked from '../img/unliked.svg'
import item00 from '../img/sneakers/item00.svg'
import plus from '../img/plus.svg'

function Card() {
  return (
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
  )
}

export default Card;
