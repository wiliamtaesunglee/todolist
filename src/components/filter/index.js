'use strict'

import React from 'react'
import { connect } from 'react-redux'
import style from './Filter.module.css'
import * as actions from '../../redux-flow/reducers/visibility-filter/actions'

const Filter = ({activeFilter, handleFilter}) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map(items => {

    if (items.action === activeFilter) return <span key={items.action} className={style.filterText}>{items.label}</span>
      return (
      <a
        href=''
        key={items.action}
        className={style.filterText}
        onClick={handleFilter(items.action)}
      >
          {items.label}
        </a>
        )
    })}
  </div>
)

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE }
]

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

const mapDispatchProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault()
    console.log(e.target, filter)
  }
})

export default connect(mapStateToProps, mapDispatchProps)(Filter)
