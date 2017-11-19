// @flow

import React from 'react';
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react';

const AppHeader = props => (
  <Segment
    inverted
    id='header'
    style={{ padding: 8, backgroundColor: '#2fac66', borderRadius: 0 }}
  >
    <Header
    inverted
    as='h3'
    textAlign='center'
    style={{ margin: 0 }}
    >
      github-logical-search
    </Header>
  </Segment>
);

export default connect(
  null, 
  null
)(AppHeader);

