import { Counter } from '../features/counter/Counter';
import './App.scss';
import Header from '../components/Header';
import Row from '../components/Row';
import Banner from '../components/Banner';
import Facility from '../components/Facility';
import { adTop, adBottom, buttonRow, companies } from '../utils/customComponents';
import { Route, Switch, useParams } from 'react-router-dom';
import Course from '../components/Course/Course';

const mainApp = (
  <>
    <div className="app__body">
      <Banner />
      <div className="app__ads">{adTop}</div>
      {buttonRow}
      <div className="app__ads">{adBottom}</div>
      <Row title="Students are also viewing" data />
      <Facility instructor />
      {companies}
      <Facility buisness />
    </div>
  </>
);
function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/course/:courseId">
          <Course />
        </Route>
        <Route exact path="/">
          {mainApp}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
