import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import ForgotPassworForm from '../forms/ForgotPassworForm';
import { resetPasswordRequest } from '../../actions/auth';

class ForgotPasswordPage extends React.Component {
  state = {
    success: false
  };

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }));

  render() {
    return (
      <div>
        {this.state.success ? (
          <Message>Email has been sent.</Message>
        ) : (
        <ForgotPassworForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default connect(null, {resetPasswordRequest})(ForgotPasswordPage);
