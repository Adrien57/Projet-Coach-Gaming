import React from 'react';
import PropTypes from 'prop-types';

import './coachdetail.scss';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CoachDescription from './CoachDescription';
import CoachCard from './CoachCard';
import CoachPalmares from './CoachPalmares';
import CoachComment from './CoachComment';


class CoachDetail extends React.Component {

  state= {
    coachDetail: [],
  }

  componentDidMount() {
    axios.get(`http://92.243.9.86/projet-CoachsGaming-back/coach-gaming/public/coach/${this.props.match.params.slugcoach}`)
      .then((response) => {
        this.setState({
          coachDetail: response.data,
        });
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error);
      });
  }

   render() {
     return (
      <React.Fragment>
      <CoachCard coach={this.state.coachDetail}/>
      <CoachDescription coach={this.state.coachDetail} />
      <CoachPalmares coach={this.state.coachDetail}/>
      <CoachComment coach={this.state.coachDetail}/>
    </React.Fragment>
  );
  }
  
};

// CoachDetail.propTypes = {
//   coach: PropTypes.array.isRequired,
// };

export default CoachDetail;

