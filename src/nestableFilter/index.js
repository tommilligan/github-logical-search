import React from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header } from 'semantic-ui-react';

import OperatorSelector from '../operatorSelection';

const NestableFilter = props => (
  <Segment.Group>
    <Segment>
      <Header as='h4'>
        <Icon name='close' size='mini' />
        <Header.Content>
          <OperatorSelector/>
        </Header.Content>
      </Header>      
    </Segment>
    <Segment.Group horizontal>
      <Segment
        style={{
          maxWidth: 20,
          padding: 0,
          backgroundColor: '#EEEEEE'
        }}
      >
      </Segment>
      <Segment>Recurse</Segment>
    </Segment.Group>
  </Segment.Group>
)

export default connect(
  null,
  null
)(NestableFilter);
