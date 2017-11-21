import React from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header, Button, Dropdown, Input } from 'semantic-ui-react';
import { deleteFilter, addFieldFilter, addNestedFilter, filterOperator } from './actions'

import OperatorSelector from '../operatorSelection';
import { GITHUB_ISSUE_FILTERS } from '../constants';

const filterOptions = GITHUB_ISSUE_FILTERS.map(filter => {
  return {
    key: filter,
    text: filter,
    value: filter
  }
});

function mapStateToProps(state, ownProps) {
  return state.logicNodes.get(ownProps.id)
}

const NestableFilter = props => {
  let deleteButton = (props.deletable) ? (
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
    ) : null;

  let operatorDiv = (
    <div style={{minWidth: 60}}>
      <Header as='h4'>
        <Header.Content>
          <OperatorSelector
            operator={props.operator}
            onChange={(param, data) => {
              props.filterOperator({
                operator: data.value,
                filterId: props.id
              });
            }}
          />
        </Header.Content>
      </Header>
    </div>
  );

  if (props.type === 'nested') {
    return (
      <Segment.Group>
        <Segment textAlign='left'>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            { deleteButton }
            { operatorDiv }
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
            <Segment vertical>
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
          </Segment>
        </Segment.Group>
      </Segment.Group>
    );
  } else {
    return (
      <Segment vertical textAlign='left'>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          { deleteButton }
          {operatorDiv }
          <Dropdown
            options={filterOptions}
            selection
            search
            placeholder='Select filter'
          />
          <Input
            placeholder='comma separated list'
            style={{
              marginLeft: 10,
              width: 300
            }} 
          />      
        </div>    
      </Segment>
    );
  }
}

const ConnectedNestableFilter = connect(
  mapStateToProps,
  {
    addFieldFilter,
    addNestedFilter,
    deleteFilter,
    filterOperator
  }
)(NestableFilter);

export default ConnectedNestableFilter;
