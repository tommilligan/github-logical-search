import React from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Image } from 'semantic-ui-react';

const Issue = props => (
  <Segment
    textAlign='left'
    style={{padding: '5px 15px'}}
    onClick={() => window.open(props.issue.html_url, "_blank")}
  >
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Image src={props.issue.user.avatar_url} size='mini' circular />
      <div style={{padding: 10}}>
        <Header as='h4'># {props.issue.number}</Header>
        {props.issue.title}
      </div>
    </div>
  </Segment>
)

const ConnectedIssue = connect(
  null,
  null
)(Issue);

export default ConnectedIssue;
