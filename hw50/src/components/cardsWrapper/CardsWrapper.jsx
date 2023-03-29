import './CardsWrapper.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../cardItem/CardItem';
import Article from '../article/Article';
import {
  // BrowserRouter, 
  Routes, 
  Route, 
  // Switch,
  Link, 
  // NavLink, 
  // useParams,
  // useNavigate
} from 'react-router-dom';


function CardsWrapper() {

  const urlCardsData = "/articles.json";

  const [categories, setCategories] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [filter, setFilters] = useState('All');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    axios.get('/categories.json').then(({ data }) => setCategories(data))
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
       
      {filteredCards.map((card) =>  <Link to='/article/Article/Article'> <CardItem
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
      </CardItem></Link>
      )}

      <Routes>
        <Route path='/article/Article/Article' element={<Article />} />
      </Routes>
    </div>
  </section>
}

export default CardsWrapper;