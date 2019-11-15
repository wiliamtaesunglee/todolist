'use strict'

import React from 'react'
import style from './Filter.module.css'

const FilterLink = ({action, activeFilter, children, onClick}) => {


    if (action === activeFilter) return <span className={style.filterText}>{children}</span>
      return (
      <a
        href=''
        className={style.filterText}
        onClick={onClick}
      >
          {children}
        </a>
        )

}

export default FilterLink
