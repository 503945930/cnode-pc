import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Index from '../components/Index';
import * as topicaction from '../actions/topicaction';
class AppChild extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const {dispatch} = this.props;
    return (
      <div>
        <Index {...bindActionCreators(topicaction,dispatch)} />
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(AppChild);
