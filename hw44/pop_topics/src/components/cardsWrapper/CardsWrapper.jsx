import './CardsWrapper.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../cardItem/CardItem';

function CardsWrapper() {

  const urlCategories = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d6f22bf6-3fb1-48e7-8e92-cf65f78bc652/categories.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230324T173942Z&X-Amz-Expires=86400&X-Amz-Signature=e33fa54f847d3e5ed25381bfa99717abb70ed8609a9fe4f390c04ed5eff974df&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22categories.json%22&x-id=GetObject';

  const urlCardsData = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4772f7f8-ae41-4825-8c75-50ecd4ebd0ef/articles.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230324T210039Z&X-Amz-Expires=86400&X-Amz-Signature=1662d0860a668a3a861a12f18757075e4a124331863382251c531b21069fe939&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22articles.json%22&x-id=GetObject";

  const [categories, setCategories] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [filter, setFilters] = useState('All');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    axios.get(urlCategories).then(({ data }) => setCategories(data))
  }, [])

  useEffect(() => {
    axios.get(urlCardsData).then(({ data }) => setCardsData(data))
  }, [])

  useEffect(() => {
    filterByCategory();
  }, [filter, cardsData]);
  
  const filterByCategory = () => {
      const filtered = filter !== 'All' ? cardsData.filter((card) => card.category.title === filter) : cardsData;
    setFilteredCards(filtered);
    }
    
  function getActiveClass(title) {
    return title === filter ? 'active' : ''; 
  }

  return <section className='blog__wrapper'>
    <h2 className='blog__title'>Popular topics</h2>
    <ul className='blog__filter' onClick={(ev) => {  
      setFilters(ev.target.innerText);
      filterByCategory();
    }}>
      <li className={getActiveClass('All')}>All</li>
      {categories.map((item) => <li className={getActiveClass(item.title)} key={item.id}>{item.title}</li>)}
    </ul>
    <div className='blog__cardsBlock'>
    {filteredCards.map((card) => <CardItem
      key = {card.id}
      imageUrl = {card.image}
      publishedDate = {card.published_at}
      title = {card.title}
      description = {card.description}
      authorAvatar = {card.author.avatar}
      authorName = {card.author.name}
      authorPosition = {card.author.position}
      category = {card.category.title}
    >   
    </CardItem>)}</div>
    
  </section>
}

export default CardsWrapper;