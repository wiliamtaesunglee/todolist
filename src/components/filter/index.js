'use strict'

import React from 'react'
import { connect } from 'react-redux'

const Filter = () => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map(items => {
      return <a href='' key={items}>{items}</a>
    })}
    <span href=''>Todos</span> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
  </div>
)

const filterItems = ['Todos', 'Finalizados', 'A fazer']

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

export default connect(mapStateToProps)(Filter)
