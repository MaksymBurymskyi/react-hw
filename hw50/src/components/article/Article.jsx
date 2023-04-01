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
      (+article.id === +id) && <div key={article.id}>
        <div className="article__titleBlock" style={{ background: `url(${article.image}) no-repeat top/100% 100%` }}>
          <h3 className="article__title">{article.title}</h3>
          <p className="article__subTitle">{ article.description}</p>
        </div>
        <div className="article__block">
          <div className='article__dateTime'><span> {new Date(article.published_at).toLocaleDateString()} </span> - <span>{article.reading_time} minutes</span>
          </div> 
          <div className="article__wrapper">
            <div className="article__text">{article.text}</div>  
            <div className='article__wrapperCategory'><span className='article__category'>{article.category.title}</span></div>
            <div className="article__line"></div>
            <div className='cardItem__author'>
              <div className='cardItem__authorAvatar'><img src={article.author.avatar} alt="author" /></div>
              <div>
                <p className='cardItem__authorName'>{ article.author.name}</p>
                <p className='cardItem__authorPosition'>{ article.author.position}</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
    )} 
  </div>
};