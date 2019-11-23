'use strict'

import React, { PureComponent } from 'react'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  //constructor() {
    //super()
      //this.state = {
      //}
  //}

  componentDidMount() {
    const response = fetch('http://apps.widenet.com.br/busca-cep/api/cep.json?code=05433020')
    .then(res =>res.json())
      .then(data => {
        return console.log(data)
      })
    //console.log(response)
  }

  render () {
    return (
      <SearchCep />
    )
  }
}

export default SearchCepContainer
