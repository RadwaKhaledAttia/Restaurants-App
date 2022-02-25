import React, { FC } from 'react'
import Restaurants from '../Restaurants'
import useStyles from './style'

const Shop: FC = () => {
  const classes = useStyles()
  return (
    <>
      <Restaurants />
    </>
  )
}

export default Shop
