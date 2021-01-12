import './Card.scss';

const Card = (props) => {
  const {
    id,
    imageURL,
    title,
    author,
    stars,
    noOfStudents,
    currPrice,
    orgPrice,
    bestSeller,
  } = props.data;

  return (
    <div className="card">
      <div className="card__image">
        <div className="card__imageWrapper"></div>
        <img src={imageURL} alt={title} />
      </div>
      <div className="card__info">
        <h3>{title}</h3>
        <small>{author}</small>
        <p className="card__starContainer">
          <strong>
            <span className="card__rating">{stars}</span>
          </strong>
          <span className="card__star">⭐</span>
          <span className="card__noBuys">({noOfStudents})</span>
        </p>
        <p className="card__price">
          <span className="card__currentPrice">
            <strong>&#8377;{currPrice}</strong>
          </span>
          <span className="card__originalPrice">&#8377;{orgPrice}</span>
        </p>
        {bestSeller ? <div className="card__badge">Bestseller</div> : null}
      </div>
    </div>
  );
};

export default Card;
