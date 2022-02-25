import React, { FC } from 'react'
import { Card } from '@mui/material'
import { Brand } from '../../../../inteface'
import useStyles from './style'

interface Props {
  brand: Brand
}

const RestaurantCard: FC<Props> = ({ brand }) => {
  const classes = useStyles()

  return (
    <Card className={classes.restaurantCardContainer}>
      <div className={classes.restaurantCardContent}>
        <img src={brand.logo} alt={brand.name} />
        <div className={classes.restaurantCardRight}>
          <h3>{brand.name}</h3>
          <p>{brand.description}</p>
        </div>
      </div>
    </Card>
  )
}

export default RestaurantCard
