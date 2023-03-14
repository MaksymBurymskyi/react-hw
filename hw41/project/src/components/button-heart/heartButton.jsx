import './heartButton.css'
import React, { useState } from 'react';

function HeartButton({ isSale }) {
  const [isFavorite, setIsFavorite] = useState(false)
  let bgd = isFavorite ? { backgroundColor: '#ffd6d6' } : {}
  
  
  if (isSale) {
    return <>
      <div className='card__icons card__saleIcon'>
        <span>sale</span>
      </div>
      <div className='card__icons card__heartIcon' style={bgd}
    onClick={() => setIsFavorite(!isFavorite)}>
        <img src="./images/heart.svg" alt="favorites icon" />
      </div>
    </>
    
  } else {
    return <div className='card__icons card__heartIcon' style={bgd}
    onClick={() => setIsFavorite(!isFavorite)}>
    <img src="./images/heart.svg" alt="favorites icon" />
    </div>
  }
  
}

export default HeartButton;