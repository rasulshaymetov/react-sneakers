import React, { useState } from 'react'
import unliked from '../img/unliked.svg'
import liked from '../img/liked.svg'
import plus from '../img/plus.svg'
import check from '../img/check.svg'
import styles from '../UI/Card.module.scss'

function Card({id, title, price, imageUrl, cartImage, onFavourite, onPlus, favourited = false}) {
  const [like, setLike] = useState(false)
  const [favourite, setFavourite] = useState(favourited)
  

  const onClickPlus = () => {
    onPlus({title, imageUrl, price, cartImage})
    setLike(!like)
  }

  const onClickFavourite = () => {
    onFavourite({id, title, imageUrl, price})
    setFavourite(!favourite)}



  return (
    <div className={styles.card}>
    <div onClick={onClickFavourite} className="favourite">
      <img className='cu-p' src={favourite ? liked : unliked} alt='Favourites'/>
    </div>
    <img width={133} height={112} src={imageUrl} alt='CardImage'/>
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center' >
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
          </div>
      
            <img className={styles.plus} onClick={onClickPlus} src={like ? check : plus} alt='AddToCard' />

          </div> 
          <div style={{display:'none'}}>{cartImage}</div>
    </div>
  )
}

export default Card;
