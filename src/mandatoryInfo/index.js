// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Input } from 'semantic-ui-react';
import * as _ from 'lodash';

import { mandatoryUsername, mandatoryRepository } from './actions';

function mapStateToProps(state, ownProps) {
  return {...state.mandatory}
}

const changeDebounce = (f) => {
  return _.debounce((event, data) => f(data.value), 500, {leading: false, trailing: true})
}

const MandatoryInfo = props => {
  return (
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Input fluid placeholder='username' onChange={changeDebounce(props.mandatoryUsername)} />
        </Grid.Column>
        <Grid.Column>
          <Input fluid placeholder='repository' onChange={changeDebounce(props.mandatoryRepository)} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const ConnectedMandatoryInfo = connect(
  mapStateToProps,
  {
    mandatoryUsername,
    mandatoryRepository
  }
)(MandatoryInfo);

export default ConnectedMandatoryInfo;



