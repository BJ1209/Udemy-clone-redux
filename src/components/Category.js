import './Category.scss';

const descriptionSubstring = (string) =>
  string.length > 255 ? string.slice(0, 255) + '...' : string;

const Category = (props) => {
  const { category, title, description, imageURL } = props.data[0];
  return (
    <div className="category">
      <div className="category__info">
        <h2 className="category__title">{title}</h2>
        <p className="category__description">{descriptionSubstring(description)}</p>
      </div>
      <img className="category__image" src={imageURL} alt={category} />
    </div>
  );
};

export default Category;
