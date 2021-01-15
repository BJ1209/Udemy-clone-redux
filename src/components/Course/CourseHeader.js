import './CourseHeader.scss';
import CourseInfo from './CourseInfo';
import './CourseHeader.scss';
const CourseHeader = ({ data }) => {
  const { title, bestSeller, stars, ratings, noOfStudents } = data;

  return (
    <header className="courseHeader">
      <h3 className="courseHeader__title">{title}</h3>
      <CourseInfo bestSeller={bestSeller} stars={stars} ratings={ratings} students={noOfStudents} />
    </header>
  );
};

export default CourseHeader;
