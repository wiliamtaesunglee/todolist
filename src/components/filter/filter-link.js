'use strict'

import React from 'react'
import style from './Filter.module.css'

const FilterLink = ({action, activeFilter, children, onClick}) => {
  const span = { tag: 'span' }
  const a = { tag: 'a', href: '#', onClick }

  const Component  = action === activeFilter ? span : a

      return (
        <Component.tag
         href={Component.href}
         className={style.filterText}
         onClick={Component.onClick}
         >
          {children}
        </Component.tag>
     )

}

export default FilterLink
