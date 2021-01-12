import { useState } from 'react';
import Card from './Card';
import Category from './Category';
import courses from '../data/courses';
import categories from '../data/category';
import './Row.scss';

const coursesData = (category = 'python') => {
  const filteredCourses = courses.filter((course) => {
    return course.category === category;
  });

  return filteredCourses;
};

const filterCategoryData = (cat = 'python') => {
  const filteredCourses = categories.filter((category) => {
    return category.category === cat;
  });
  return filteredCourses;
};

const randomCourses = () => {
  let randomArray = [];
  for (let i = 1; i <= 5; i++) {
    const randomCourse = courses[Math.floor(Math.random() * (courses.length - 1))];
    randomArray.push(randomCourse);
  }
  randomArray = [...new Set(randomArray)];

  return randomArray.map((course) => <Card key={course.id} data={course} />);
};

const Row = ({ button, title, description, data }) => {
  const [cardCourses, setCardCourses] = useState(coursesData);
  const [categoryData, setCategoryData] = useState(filterCategoryData);

  const buttonsJsx = (
    <>
      <div className="row__buttons">
        <button
          onClick={() => {
            setCardCourses(coursesData('python'));
            setCategoryData(filterCategoryData('python'));
          }}
          className={`row__btn ${
            categoryData && categoryData[0]?.category === 'python' ? 'selected' : ''
          }`}
        >
          Python
        </button>
        <button
          onClick={() => {
            setCardCourses(coursesData('Excel'));
            setCategoryData(filterCategoryData('Excel'));
          }}
          className={`row__btn ${
            categoryData && categoryData[0]?.category === 'Excel' ? 'selected' : ''
          }`}
        >
          Excel
        </button>
        <button
          onClick={() => {
            setCardCourses(coursesData('web-development'));
            setCategoryData(filterCategoryData('web-development'));
          }}
          className={`row__btn ${
            categoryData && categoryData[0]?.category === 'web-development' ? 'selected' : ''
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => {
            setCardCourses(coursesData('javascript'));
            setCategoryData(filterCategoryData('javascript'));
          }}
          className={`row__btn ${
            categoryData && categoryData[0]?.category === 'javascript' ? 'selected' : ''
          }`}
        >
          JavaScript
        </button>
      </div>
      <Category data={categoryData} />
    </>
  );

  const cardsJsx = cardCourses.map((course) => <Card key={course.id} data={course} />);

  return (
    <div className="row">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {button && buttonsJsx}
      <div className="row__cards">{!data ? cardsJsx : randomCourses()}</div>
    </div>
  );
};

export default Row;
