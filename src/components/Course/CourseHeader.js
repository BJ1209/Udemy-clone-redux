import { ReactComponent as World } from '../../images/logo/world.svg';
import { ReactComponent as WishList } from '../../images/logo/wishlist.svg';
import { ReactComponent as Share } from '../../images/logo/share.svg';
import './CourseHeader.scss';
const CourseHeader = ({ data }) => {
  const { title, description, author, bestSeller, stars, ratings, language, noOfStudents } = data;
  return (
    <div className="courseHeader">
      <div className="courseHeader__container">
        <h2 className="courseHeader__title">{title}</h2>
        <p className="courseHeader__description">{description}</p>
        <div className="courseHeader__info">
          {bestSeller && <div className="courseHeader__badge">BestSeller</div>}
          <p className="courseHeader__starContainer">
            <strong>
              <span className="courseHeader__rating">{stars}</span>
              <span className="courseHeader__star">⭐</span>
            </strong>
            <span className="courseHeader__noBuys">({ratings} ratings)</span>
            <span className="courseHeader__students">{noOfStudents} students</span>
          </p>
        </div>
        <div className="courseHeader__owner">
          Created by
          <span>{author}</span>
        </div>
        {/* <div className="courseHeader__language">
          <World />
          <p>{language}</p>
        </div> */}
        <div className="courseHeader__buttons">
          <button>
            Wishlist <WishList />
          </button>
          <button>
            Share <Share />
          </button>
          <button>Gift this course</button>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
