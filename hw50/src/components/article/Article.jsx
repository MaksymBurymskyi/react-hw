import './Article.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function Article( ) {

  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get('/articles.json').then(({ data }) => {
      if (!data) {
        navigate('/404')
        return
      }
      setArticles(data)
    })
  }, [id, navigate])
  
  return <div className='article' key={id}>

    {articles.map((article) =>       
      (+article.id === +id) && <>
        <div className='article__dateTime'><span> {new Date(article.published_at).toLocaleDateString()} </span> - <span>{article.reading_time} minutes</span></div> 
        <div className="article__wrapper">
          <h3>{article.title}</h3>
          <div className="article__text">{article.text }</div>      
        </div>
      </>
    )} 
  </div>
};