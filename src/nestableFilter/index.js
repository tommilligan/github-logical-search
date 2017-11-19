import React from 'react';
import { connect } from 'react-redux';
import { Segment, Icon, Header, Button } from 'semantic-ui-react';
import * as actions from './actions'

import OperatorSelector from '../operatorSelection';

/*

export class Node extends Component {
  handleIncrementClick = () => {
    const { increment, id } = this.props
    increment(id)
  }

  handleAddChildClick = e => {
    e.preventDefault()

    const { addChild, createNode, id } = this.props
    const childId = createNode().nodeId
    addChild(id, childId)
  }

  handleRemoveClick = e => {
    e.preventDefault()

    const { removeChild, deleteNode, parentId, id } = this.props
    removeChild(parentId, id)
    deleteNode(id)
  }

  renderChild = childId => {
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { counter, parentId, childIds } = this.props
    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleIncrementClick}>
          +
        </button>
        {' '}
        {typeof parentId !== 'undefined' &&
          <a href="#" onClick={this.handleRemoveClick} // eslint-disable-line jsx-a11y/href-no-hash
             style={{ color: 'lightgray', textDecoration: 'none' }}>
            ×
          </a>
        }
        <ul>
          {childIds.map(this.renderChild)}
          <li key="add">
            <a href="#" // eslint-disable-line jsx-a11y/href-no-hash
              onClick={this.handleAddChildClick}
            >
              Add child
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
*/
function mapStateToProps(state, ownProps) {
  return state.logicNodes[ownProps.id]
}

const NestableFilter = props => (
  <Segment.Group>
    <Segment textAlign='left'>
      {
        (props.deletable) ? (
          <Button icon size='medium'>
            <Icon name='close' size='medium' />
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
            <Segment >
              <ConnectedNestableFilter id={childId} deletable={true} />
            </Segment>
          ))
        }
        <Button icon color='green'>
          <Icon name='add' />
        </Button>
      </Segment>
    </Segment.Group>
  </Segment.Group>
)

const ConnectedNestableFilter = connect(
  mapStateToProps,
  actions
)(NestableFilter);

export default ConnectedNestableFilter;
