'use strict'

import todos from './index'
import deepFreeze from 'deep-freeze'
import { expect } from 'chai'
import { ADD_TODO, TOGGLE_TODO } from './actions.js'

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
  const after = [{id: 0, text: 'hey', completed: false}]

  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should return a todo item', () => {
  const before = deepFreeze([
    {id: 0, text: 'hey', completed: false}
  ])
  const action = deepFreeze({
    type: ADD_TODO, payload: {
      id: 1,
      text: "ho, let's go",
      completed: false
    }
  })

  const after = [
    {id: 0, text: "hey",completed: false },
    {id: 1, text: "ho, let's go", completed: false}
    ]

  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toggle the first todo', () => {
  const before = deepFreeze([
    {id: 0, text: 'hey', completed: false},
    {id: 1, text: 'ho', completed: false}
  ])

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: {id: 0}
  })

  const after = [
    {id: 0, text: 'hey', completed: true},
    {id: 1, text: 'ho', completed: false}
  ]

  expect(todos(before, action)).to.be.deep.equal(after)
})
