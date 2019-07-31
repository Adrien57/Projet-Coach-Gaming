import React from 'react';
import PropTypes from 'prop-types';

import './coachdetail.scss';
import CoachDescription from './CoachDescription';
import CoachCard from './CoachCard';
import CoachPalmares from './CoachPalmares';
import CoachComment from './CoachComment';

const CoachDetail = ({ coach }) => {
  return (
    <React.Fragment>
      <CoachCard coach={coach} />
      <CoachDescription />
      <CoachPalmares />
      <CoachComment />
    </React.Fragment>
  );
};

CoachDetail.propTypes = {
  coach: PropTypes.array.isRequired,
};

export default CoachDetail;
