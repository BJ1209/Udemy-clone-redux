import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseTop from './CourseTop';
import CourseHeader from './CourseHeader';
import './Course.scss';

import coursesData from '../../data/courses';
import { ClipLoader } from 'react-spinners';
import { ReactComponent as Tick } from '../../images/logo/tick.svg';
import CourseCard from './CourseCard';

const Course = () => {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    const data = coursesData.filter((course) => course.id === parseInt(courseId));
    setData(data[0]);
    setLoading(false);
  }, [courseId]);

  console.log(data);
  return (
    <div className="course">
      {!loading ? (
        <>
          <CourseHeader data={data} />
          <CourseTop data={data} />
          <div className="course__body">
            <div className="course__left">
              <div className="course__includes">
                <h3>What you'll learn</h3>
                <div className="course__points">
                  <ul>
                    {data?.learn?.map((point, index) => (
                      <li key={index}>
                        <Tick />
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="course__audience">
                <h3>Who this course is for: </h3>
                <ul>
                  {data?.audience?.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <CourseCard data={data} />
          </div>
        </>
      ) : (
        <div className="course__loader">
          <ClipLoader loading={loading} size={60} color="#3c3b37" />
        </div>
      )}
    </div>
  );
};

export default Course;
