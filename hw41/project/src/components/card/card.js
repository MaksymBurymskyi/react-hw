import "./card.css";
import Button from "../button-conversion/button";
import HeartButton from "../button-heart/heartButton";

function Card({ src, alt, title, description, price, oldPrice, isSale }) {
  let oldPriceEl;
  let extraBtn;
  if (isSale) {
    console.log(isSale);
    oldPriceEl = (
      <span className="card__price card__price-old">${oldPrice}</span>
    );
    extraBtn = (
      <Button
        classBtn={"card__button card__button-extra"}
        textBtn="buy now"></Button>
    );
  }

  return (
    <>
      <div className="card">
        <img className="card__img" src={src} alt={alt} />
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <span className="card__price">${price}</span>
        {oldPriceEl}
        <div className="card__btnsWrapp">
          <Button
            classBtn={"card__button card__button-conversion"}
            textBtn="learn more"></Button>
          {extraBtn}
        </div>
        <div className="card__iconsWrapp">
          <HeartButton isSale={isSale}></HeartButton>
        </div>
      </div>
    </>
  );
}

export default Card;
