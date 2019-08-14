import React from 'react';
import PropTypes from 'prop-types';

import './coachdetail.scss';
import { fetchCoach } from 'src/store/reducer';
import axios from 'axios';
import CoachDescription from './CoachDescription';
import CoachCard from './CoachCard';
import CoachPalmares from './CoachPalmares';
import CoachComment from './CoachComment';
import store from '../../store';


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
        console.log(this.props.match.params);
        this.saveCoachDetail(coachDetailFromApi);
        console.log(this.state.coachDetail.user.id);
        
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

//
// axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/coach/${this.props.match.params.slugcoach}`)
//     .then((response) => {
//       const coachDetailFromApi = response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });


// class CoachDetail extends React.Component {
//   componentDidMount() {
//     store.dispatch(fetchCoach());

//   }

//   render() {
//     return (
//       <div id="coachDetail">
//         {this.loadingCoach && (
//         <div>Chargement...</div>
//         )}
//         {this.loadingCoach === false && (
//         <React.Fragment>
//           <CoachCard coachDetail={this.coachDetail} />
//           <CoachDescription />
//           <CoachPalmares />
//           <CoachComment />
//         </React.Fragment>
//         )}
//       </div>
//     );
//   };
// }
