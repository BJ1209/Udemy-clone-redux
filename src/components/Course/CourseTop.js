import { ReactComponent as World } from '../../images/logo/world.svg';
import { ReactComponent as WishList } from '../../images/logo/wishlist.svg';
import { ReactComponent as Share } from '../../images/logo/share.svg';
import CourseInfo from './CourseInfo';
import './CourseTop.scss';
const CourseTop = ({ data }) => {
  const { title, description, author, bestSeller, stars, ratings, language, noOfStudents } = data;
  return (
    <div className="courseTop">
      <div className="courseTop__container">
        <h2 className="courseTop__title">{title}</h2>
        <p className="courseTop__description">{description}</p>
        <CourseInfo
          bestSeller={bestSeller}
          stars={stars}
          ratings={ratings}
          students={noOfStudents}
        />
        <div className="courseTop__owner">
          Created by
          <span>{author}</span>
        </div>
        <div className="courseTop__language">
          <World />
          <p>{language}</p>
        </div>
        <div className="courseTop__buttons">
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

export default CourseTop;
