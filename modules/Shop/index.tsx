import React, { useState } from 'react'
import Search from '../../common/Search'
import Restaurants from '../Restaurants'

const Shop = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <Search setSearchValue={setSearchValue} />
      <Restaurants searchValue={searchValue} />
    </>
  )
}

export default Shop
