import { Counter } from '../features/counter/Counter';
import './App.scss';
import Header from '../components/Header';
import Row from '../components/Row';
import Ad from '../components/Ad';

import { ReactComponent as Video } from '../images/logo/yt.svg';
import { ReactComponent as Certificate } from '../images/logo/certificate.svg';
import { ReactComponent as Lifetime } from '../images/logo/lifetime.svg';
import { ReactComponent as Time } from '../images/logo/time.svg';
import { ReactComponent as Teach } from '../images/logo/teach.svg';
import { ReactComponent as VideoGroup } from '../images/logo/video.svg';
import Banner from '../components/Banner';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Banner />
        <div className="app__ads">
          <Ad
            Icon={Video}
            title="130,000 online courses"
            description="Enjoy a variety of fresh topics"
          />
          <Ad
            Icon={Certificate}
            title="Expert instruction"
            description="Find the right instructor for you"
          />
          <Ad Icon={Lifetime} title="Lifetime access" description="Learn on your schedule" />
        </div>
        <Row
          button
          title="The world's largest selection of courses"
          description="Choose from 130,000 online video courses with new additions published every month"
        />
        <div className="app__ads">
          <Ad
            Icon={Time}
            title="Go at your own pace"
            description="Enjoy lifetime access to courses on Udemy’s website and app"
          />
          <Ad
            Icon={Teach}
            title="Learn from industry experts"
            description="Select from top instructors around the world"
          />
          <Ad
            Icon={VideoGroup}
            title="Find video courses on almost any topic"
            description="Build your library for your career and personal growth"
          />
        </div>
        <Row title="Students are viewing" />
      </div>
    </div>
  );
}

export default App;
