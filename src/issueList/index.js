import React from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header, Button, Dropdown, Input } from 'semantic-ui-react';

import Issue from './issue';

function mapStateToProps(state, ownProps) {
  return state.issues
}

const IssueList = props => (
  <Segment.Group raised>
    {
      props.issues.map(issue => {
        <Issue issue />
      })
    }
    <Issue />
  </Segment.Group>
)

const ConnectedIssueList = connect(
  mapStateToProps,
  null
)(IssueList);

export default ConnectedIssueList;
