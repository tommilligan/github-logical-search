import React from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import Issue from './issue';

function mapStateToProps(state, ownProps) {
  return state.issues
}

const IssueList = props => (
  <Segment.Group raised>
    {
      props.issues.map(issue => {
        return <Issue key={issue.id} issue={issue} />
      })
    }
  </Segment.Group>
)

const ConnectedIssueList = connect(
  mapStateToProps,
  null
)(IssueList);

export default ConnectedIssueList;
