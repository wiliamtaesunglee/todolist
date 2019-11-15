'use strict'

import React from 'react'
import { connect } from 'react-redux'
import style from './Filter.module.css'
import * as action from '../../redux-flow/reducers/visibility-filter/actions'
import { setVisibilityFilter } from '../../redux-flow/reducers/visibility-filter/action-creator'
import FilterLink from './filter-link'

const Filter = ({activeFilter, handleFilter}) => (
   <div>
   <h3>Mostrar</h3>
     {filterItems.map(items => (
      <FilterLink
        key={items.action}
        action={items.action}
        activeFilter={items.activeFilter}
        onClick={handleFilter(items.action)}
      >
      {items.label}
    </FilterLink>
     ))}
   </div>
)

const filterItems = [
  { label: 'Todos', action: action.SHOW_ALL },
  { label: 'Finalizados', action: action.SHOW_COMPLETED },
  { label: 'A fazer', action: action.SHOW_ACTIVE }
]

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

const mapDispatchProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
    console.log(e.target, filter)
  }
})

export default connect(mapStateToProps, mapDispatchProps)(Filter)
