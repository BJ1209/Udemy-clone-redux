import './CourseCard.scss';
const CourseCard = ({ data }) => {
  const { imageURL, currPrice, title, orgPrice, courseIncludes } = data;
  return (
    <div className="courseCard">
      <img src={imageURL} alt={title} className="courseCard__image" />
      <div className="courseCard__priceInfo">
        <div className="courseCard__price">
          <span className="courseCard__currPrice">&#8377;{currPrice}</span>
          <span className="courseCard__orgPrice">&#8377;{orgPrice}</span>
        </div>
        <button className="courseCard__cart">Add to cart</button>
        <button className="courseCard__buy">Buy now</button>
        <small>30-Day Money-Back Guarantee</small>
      </div>

      <div className="courseCard__includes">
        <h4>This course includes: </h4>
        <ul>
          {courseIncludes?.map(({ Icon, title }) => (
            <li key={title}>
              <Icon /> <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
