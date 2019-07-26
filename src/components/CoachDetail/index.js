import React from 'react';

import './coachdetail.scss';
import CoachDescription from './CoachDescription';
import CoachCard from './CoachCard';
import CoachPalmares from './CoachPalmares';
import CoachComment from './CoachComment';

class CoachDetail extends React.Component {
  componentDidMount() {

  }


  render() {
    return (
      <React.Fragment>
        <CoachCard />
        <CoachDescription />
        <CoachPalmares />
        <CoachComment />
      </React.Fragment>
    );
  }
}

export default CoachDetail;
