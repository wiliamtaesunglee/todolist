'use strict'


export const initialValue = []

const createReducer = (initialValue, handleActions) =>
  (state = initialValue, action) =>
    (Object.prototype.hasOwnProperty.call(handleActions, action.type)) ?
      handleActions[action.type](state, action) :
       state

export default createReducer
