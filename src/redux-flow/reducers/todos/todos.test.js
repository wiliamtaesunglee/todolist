'use strict'

import todos, { initialValue } from './index'
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

it('should toggle the second todo', () => {
  const before = deepFreeze([
    {id: 0, text: 'hey', completed: false},
    {id: 1, text: 'ho', completed: false}
  ])

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: {id: 1}
  })

  const after = ([
    {id: 0, text: 'hey', completed: false},
    {id: 1, text: 'ho', completed: true}
  ])

  expect(todos(before, action)).to.deep.equal(after)
})

it('should return the initial state if the action is unknown', () => {
  const before = deepFreeze([
    {id: 0, text: 'hey', completed: false}
  ])

  const action = deepFreeze({
    type: 'UNKKOWN',
    payload: {id: 0}
  })

  const after = ([
    {id: 0, text: 'hey', completed: false}
  ])

  expect(todos(before, action)).to.deep.equal(after)
})

it('should return the initial state if the before is undefined', () => {
  const before = undefined
  const action = deepFreeze([])
  const after = initialValue
  expect(todos(before, action)).to.be.deep.equal(after)
})
