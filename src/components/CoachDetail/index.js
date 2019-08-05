import React from 'react';
import PropTypes from 'prop-types';

import './coachdetail.scss';
import { fetchCoach } from 'src/store/reducer';
import CoachDescription from './CoachDescription';
import CoachCard from './CoachCard';
import CoachPalmares from './CoachPalmares';
import CoachComment from './CoachComment';
import store from '../../store';


class CoachDetail extends React.Component {
  componentDidMount() {
    store.dispatch(fetchCoach());
    
  }

  render() {
    return (
      <div id="coachDetail">
        {this.loadingCoach && (
        <div>Chargement...</div>
        )}
        {this.loadingCoach === false && (
        <React.Fragment>
          <CoachCard coachDetail={this.coachDetail} />
          <CoachDescription />
          <CoachPalmares />
          <CoachComment />
        </React.Fragment>
        )}
      </div>
    );
  };
}


export default CoachDetail;

//
// axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/coach/${this.props.match.params.slugcoach}`)
//     .then((response) => {
//       const coachDetailFromApi = response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
