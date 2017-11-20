import React from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header, Button, Dropdown, Input, Image } from 'semantic-ui-react';

function mapStateToProps(state, ownProps) {
  return state.issues
}

const Issue = props => (
  <Segment textAlign='left' style={{padding: '5px 15px'}}>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Image src='https://avatars2.githubusercontent.com/u/12255914?v=4' size='mini' circular />
      <div style={{padding: 10}}>
        <Header as='h4'>Fourth Header</Header>
        Spam, ipsum dolor
      </div>
    </div>
  </Segment>
)

const ConnectedIssue = connect(
  null,
  null
)(Issue);

export default ConnectedIssue;
