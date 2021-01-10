import './Ad.scss';
const Ad = ({ Icon, title, description }) => {
  return (
    <div className="ad">
      <div className="ad__icon">{<Icon className="ad__icon" />}</div>
      <div className="ad__info">
        <h3 className="ad__title">{title}</h3>
        <p className="ad__description">{description}</p>
      </div>
    </div>
  );
};

export default Ad;
