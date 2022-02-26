import React, { useState } from 'react'
import Search from '../../common/Search'
import Tags from '../../modules/Tags'
import Restaurants from '../Restaurants'

const Shop = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <Search setSearchValue={setSearchValue} />
      <Tags />
      <Restaurants searchValue={searchValue} />
    </>
  )
}

export default Shop
