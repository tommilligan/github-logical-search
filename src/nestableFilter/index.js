import React from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header, Button } from 'semantic-ui-react';
import { deleteFilter, addFieldFilter, addNestedFilter } from './actions'

import OperatorSelector from '../operatorSelection';


function mapStateToProps(state, ownProps) {
  return state.logicNodes.get(ownProps.id)
}

const NestableFilter = props => (
  <Segment.Group>
    <Segment textAlign='left'>
      {
        (props.deletable) ? (
          <Button
            icon
            size='medium'
            onClick={(param, data) => props.deleteFilter(props.id)}
          >
            <Icon name='close' />
          </Button>
        ) : null
      }
      <Header as='h4'>
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
      <Segment textAlign='left'>
        {
          props.childIds.map(childId => (
            <Segment key={childId}>
              <ConnectedNestableFilter id={childId} deletable={true} />
            </Segment>
          ))
        }
        <Button
          icon
          color='green'
          onClick={(param, data) => props.addNestedFilter(props.id)}
        >
          <Icon name='add' />
        </Button>
      </Segment>
    </Segment.Group>
  </Segment.Group>
)

const ConnectedNestableFilter = connect(
  mapStateToProps,
  {
    addFieldFilter,
    addNestedFilter,
    deleteFilter
  }
)(NestableFilter);

export default ConnectedNestableFilter;
