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
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        {
          (props.deletable) ? (
            <Button
              icon
              size='mini'
              style={{
                marginRight: 10
              }}
              onClick={(param, data) => props.deleteFilter(props.id)}
            >
              <Icon name='close' />
            </Button>
          ) : null
        }
        <div>
          <Header as='h4'>
            <Header.Content>
              <OperatorSelector/>
            </Header.Content>
          </Header>  
        </div>
      </div>    
    </Segment>
    <Segment.Group horizontal>
      <Segment
        style={{
          maxWidth: 10,
          padding: 0,
          backgroundColor: '#EEEEEE'
        }}
      >
      </Segment>
      <Segment textAlign='left'>
        {
          props.childIds.map(childId => (
            <ConnectedNestableFilter key={childId} id={childId} deletable={true} />
          ))
        }
        <Button
          icon='add'
          color='blue'
          size='mini'
          content='Data'
          labelPosition='right'
          onClick={(param, data) => props.addFieldFilter(props.id)}
        />
        <Button
          icon='add'
          color='green'
          size='mini'
          content='Nest'
          labelPosition='right'
          onClick={(param, data) => props.addNestedFilter(props.id)}
        />
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
