import './CardItem.scss';

export default function CardItem({ id, title, imageUrl, publishedDate, description, authorAvatar, authorName, authorPosition, category }) {
  
  return <>
    <div className='cardItem' data-id={id} style={{ background: `url(${imageUrl}) no-repeat top/auto 280px ` }}>
      <div className='cardItem__date'>{new Date(publishedDate).toLocaleDateString()}</div>
      <h3>{title}</h3>
      <div className='cardItem__description'>{description}</div>
      <div className='cardItem__line'></div>
      <div className='cardItem__author'>
        <div className='cardItem__authorAvatar'><img src={authorAvatar} alt="author" /></div>
        <div>
          <p className='cardItem__authorName'>{ authorName}</p>
          <p className='cardItem__authorPosition'>{ authorPosition}</p>
        </div>
      </div>  
      <span className='cardItem__category'>{ category}</span>
    </div>
    
  </>
}