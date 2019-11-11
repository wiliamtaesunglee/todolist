'use strict'

import React from 'react'
import { connect } from 'react-redux'
import style from './Filter.module.css'
import * as actions from '../../redux-flow/reducers/visibility-filter/actions'

const Filter = ({activeFilter}) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map(items => {

    if (items.action === activeFilter) return <span key={items.action} className={style.filterText}>{items.label}</span>

      return <a href='' key={items.action} className={style.filterText}>{items.label}</a>
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

export default connect(mapStateToProps)(Filter)
