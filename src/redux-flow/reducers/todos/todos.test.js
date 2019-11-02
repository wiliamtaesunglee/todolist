'use strict'

import todos from './index'
import deepFreeze from 'deep-freeze'
import { expect } from 'chai'
import { ADD_TODO } from './actions.js'

it('should todos be a function', () => {
  expect(todos).to.be.a('function')
})

it('should add a todo item', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_TODO, payload: {
      id: 0,
      text: 'hey',
      completed: false
    }
  })
  const after = ({id: 0, text: 'hey', completed: false})

  expect(todos(before, action)).to.be.deep.equal(after)
})
