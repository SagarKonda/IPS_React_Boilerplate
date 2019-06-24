
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAPI } from '../../actions';
import AppContainer from '../../components/app-container';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        getAPI,
    },
    dispatch
  );

export class Home extends Component {
  componentDidMount() {
    const { getAPI } = this.props;
    getAPI();
  }

  render() {
    return <AppContainer><>This will show an error modal</></AppContainer>
  }
}

Home.propTypes = {
}

export default connect(null, mapDispatchToProps)(Home);
