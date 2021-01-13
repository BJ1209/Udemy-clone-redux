import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from './CourseHeader';
import coursesData from '../../data/courses';
import { ClipLoader } from 'react-spinners';
import './Course.scss';
const Course = () => {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    const data = coursesData.filter((course) => course.id === parseInt(courseId));
    setData(data[0]);
    setLoading(false);
  }, []);

  return !loading ? (
    <div className="course">
      <CourseHeader data={data} />
    </div>
  ) : (
    <div className="couse__loader">
      <ClipLoader loading={loading} />
    </div>
  );
};

export default Course;
