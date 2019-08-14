import React from 'react';
import axios from 'axios';
import CoachDescription from './CoachDescription';
import CoachCard from './CoachCard';
import CoachPalmares from './CoachPalmares';
import CoachComment from './CoachComment';

import './coachdetail.scss';


class CoachDetail extends React.Component {

  state = {
    coachDetail: {},
    loadingCoach: true,
  }

  componentDidMount() {
    this.SearchCoach();
  }

  saveCoachDetail = (newCoachDetail) => {
    this.setState({
      coachDetail: newCoachDetail,
      loadingCoach: false,
    });
  };

  SearchCoach = () => {
    axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/coach/${this.props.match.params.slugcoach}`)
      .then((response) => {
        const coachDetailFromApi = response.data;
        this.saveCoachDetail(coachDetailFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { loadingCoach, coachDetail } = this.state;
    return (
      <div id="coachDetail">
        {loadingCoach && (
        <div><h2>Chargement</h2></div>
        )}
        {!loadingCoach && (
          <div className="coach_detail">
            <CoachCard coachDetail={coachDetail} />
            <CoachDescription description={coachDetail} />
            <CoachPalmares palmares={coachDetail} />
            <CoachComment comment={coachDetail} />
          </div>
        )}
      </div>
    );
  }
}

export default CoachDetail;
