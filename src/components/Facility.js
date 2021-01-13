import styled from 'styled-components';
import Instructor from '../images/instructor.jpg';
import Buisness from '../images/buisness.jpg';
import './Facility.scss';
const Facility = ({ instructor, buisness }) => {
  const Div = styled.div`
    background: ${instructor ? '#fbfbf8' : '#003640'};
  `;
  const Button = styled.button`
    background: #0f7c90;
    font-size: 0.95rem;
    color: #fff;
    padding: 1em;
    margin-top: 0.5em;
    outline: none;
    border: none;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      border-color: #094c59;
      background: #094c59;
    }
  `;
  const Img = styled.img`
    order: ${buisness ? '2' : '0'};
  `;
  const Title = styled.h2`
    font-size: 2rem;
    color: ${!buisness ? '#3c3b37' : '#fff'};
  `;
  const Para = styled.p`
    font-size: 1.1rem;
    margin: 0.2em 0 0.4em;
    color: ${!buisness ? '#73726c' : '#fff'};
  `;
  const inst = (
    <>
      <Img draggable={false} src={Instructor} alt="instructor" />
      <div className="facility__info">
        <Title>Become an instructor</Title>
        <Para>
          Top instructors from around the world teach millions of students on Udemy. We provide the
          tools and skills to teach what you love.
        </Para>
        <Button instructor>Start Teaching Today</Button>
      </div>
    </>
  );
  const buis = (
    <>
      <Img draggable={false} src={Buisness} alt="buisness" />
      <div className="facility__info">
        <Title>Udemy for Business</Title>
        <Para>Get unlimited access to 5,000+ of Udemy’s top courses for your team.</Para>
        <Button instructor>Get Udemy for Business</Button>
      </div>
    </>
  );
  return (
    <Div className="facility">
      <div className="facility__data">
        {instructor && inst}
        {buisness && buis}
      </div>
    </Div>
  );
};

export default Facility;
