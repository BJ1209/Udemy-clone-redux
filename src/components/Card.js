import './Card.scss';
const Card = ({ id, imageURL, title, author, stars, buys, currPrice, orgPrice, bestseller }) => {
  return (
    <div className="card">
      <div className="card__image">
        <div className="card__imageWrapper"></div>
        <img
          src="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg?secure=ITOVcs3As2pdeWzPuhkPHw%3D%3D%2C1610262431"
          alt="course image"
        />
      </div>
      <div className="card__info">
        <h3>2021 Complete Python Bootcamp From Zero to Hero in Python</h3>
        <small>Jose Portilla</small>
        <p className="card__starContainer">
          <strong>
            <span className="card__rating">4.6</span>
          </strong>
          <span className="card__star">⭐</span>
          <span className="card__noBuys">(456,456)</span>
        </p>
        <p className="card__price">
          <span className="card__currentPrice">
            <strong>&#8377;455</strong>
          </span>
          <span className="card__originalPrice">&#8377;8,640</span>
        </p>
        {bestseller && <div className="card__badge">Bestseller</div>}
      </div>
    </div>
  );
};

export default Card;
