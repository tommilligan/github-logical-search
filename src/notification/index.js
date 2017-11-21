// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Segment, Header } from 'semantic-ui-react'

function mapStateToProps(state, ownProps) {
  return {message: state.issues.error}
}

const Notification = props => {
  return (props.message) ? (
    <Segment inverted color='red'>
      <Header
        inverted
        as='h4'
        textAlign='center'
        style={{ margin: 0 }}
      >
        {props.message}
      </Header>
    </Segment>
  ) : null;
}

export default connect(
    mapStateToProps,
    null
)(Notification);
