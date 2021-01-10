import Card from './Card';
import './Row.scss';
const Row = ({ button, title, description }) => {
  return (
    <div className="row">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {button && (
        <div className="row__buttons">
          <button className="row__btn selected">Python</button>
          <button className="row__btn">Excel</button>
          <button className="row__btn">Web Development</button>
          <button className="row__btn">JavaScript</button>
          <button className="row__btn">Data Science</button>
          <button className="row__btn">AWS Certification</button>
          <button className="row__btn">Drawing</button>
        </div>
      )}
      <div className="row__cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Row;
