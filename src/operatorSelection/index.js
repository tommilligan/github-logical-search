// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Header } from 'semantic-ui-react'

export const operators = {
  AND: "AND",
  OR: "OR",
  NOT: "NOT"
}

const options = [
  {
    key: operators.AND,
    text: 'AND',
    value: operators.AND,
    description: 'all of',
  },
  {
    key: operators.OR,
    text: 'OR',
    value: operators.OR,
    description: 'at least one of',
  },
  {
    key: operators.NOT,
    text: 'NOT',
    value: operators.NOT,
    description: 'do not include',
  },
]

const OperatorSelection = props => (
  <Header as='h4'>
    <Header.Content>
      <Dropdown inline options={options} defaultValue={options[0].value} />
    </Header.Content>
  </Header>
)


export default connect(
    null,
    null
)(OperatorSelection);
