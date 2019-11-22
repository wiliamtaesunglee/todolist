'use strict'

import React from 'react'
import style from './SearchCep.module.css'

const SearchCep = () => (
  <div className={style.div}>
    <form className={style.form}>
      <input type='text' name='cep' />
      <button type='submit'>Buscar endereço</button>
    </form>

    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>

      <tbody>
        <td>05433020</td>
        <td>Rua</td>
        <td>Bairro</td>
        <td>Cidade</td>i
        <td>Estado</td>
      </tbody>
    </table>
  </div>
)

export default SearchCep
