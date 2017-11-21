// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'

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
  <Dropdown
    inline
    options={options}
    value={props.operator}
    onChange={props.onChange}
  />
)


export default connect(
    null,
    null
)(OperatorSelection);
