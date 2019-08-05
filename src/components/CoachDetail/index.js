import React from 'react';
import PropTypes from 'prop-types';

import './coachdetail.scss';
import CoachDescription from './CoachDescription';
import CoachCard from './CoachCard';
import CoachPalmares from './CoachPalmares';
import CoachComment from './CoachComment';
import axios from 'axios';
import store from '../../store';

const CoachDetail = ({ coachDetail, loadCoach  }) => {

  
  return (
    <React.Fragment>
      <CoachCard coachDetail={coachDetail} />
      <CoachDescription />
      <CoachPalmares />
      <CoachComment />
    </React.Fragment>
  );
};


export default CoachDetail;

// 
      // axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/coach/${this.props.match.params.slugcoach}`)
      //     .then((response) => {
      //       const coachDetailFromApi = response.data;
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
