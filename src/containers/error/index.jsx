import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { clearErrors } from "../../actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearErrors
    },
    dispatch
  );

const mapStateToProps = ({
  error: {
    meta: { hasError, error }
  }
}) => ({
  hasError,
  error
});

// eslint-disable-next-line react/prefer-stateless-function
export class Error extends Component {
  render() {
    const {
      hasError,
      clearErrors,
      error: { message }
    } = this.props;
    return (
      <Modal show={hasError} onHide={clearErrors}>
        <Modal.Header closeButton>
          <Modal.Title>Error Occured</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={clearErrors}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

Error.propTypes = {
  hasError: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  clearErrors: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error);
