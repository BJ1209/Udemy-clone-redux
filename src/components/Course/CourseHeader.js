import { ReactComponent as World } from '../../images/logo/world.svg';
const CourseHeader = () => {
  return (
    <div className="courseHeader">
      <div className="courseHeader__container">
        <h2 className="courseHeader__title"></h2>
        <p className="courseHeader__description"></p>
        <div className="courseHeader__info">
          <div className="courseHeader__badge">BestSeller</div>
          <p className="courseHeader__starContainer">
            <strong>
              <span className="courseHeader__rating"></span>
            </strong>
            <span className="courseHeader__star">⭐</span>
            <span className="courseHeader__noBuys"></span>
          </p>
        </div>
        <div className="courseHeader__owner">Created by</div>
        <div className="courseHeader__language">
          <World />
          <p>English</p>
        </div>
      </div>
      <div className="courseHeader__buttons">
        <button>Wishlist</button>
        <button>Share</button>
        <button>Gift this course</button>
      </div>
    </div>
  );
};

export default CourseHeader;
