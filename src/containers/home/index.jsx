import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAPI } from "../../actions";
import AppContainer from "../../components/app-container";
import "../../sass/main.scss";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAPI
    },
    dispatch
  );

export class Home extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { getAPI } = this.props;
    getAPI();
  }

  render() {
    return (
      <AppContainer>
        <>This will show an error modal</>
      </AppContainer>
    );
  }
}

Home.propTypes = {};

export default connect(
  null,
  mapDispatchToProps
)(Home);
