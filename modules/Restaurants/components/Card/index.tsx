import React, { FC } from 'react'
import Link from 'next/link'
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
        <Link href={`/products/${brand.name}`}>
          <a>
            <img src={brand.logo} alt={brand.name} />
          </a>
        </Link>
        <div className={classes.restaurantCardRight}>
          <Link href={`/products/${brand.name}`}>
            <a>
              <h3>{brand.name}</h3>
            </a>
          </Link>
          <p>{brand.description}</p>
        </div>
      </div>
    </Card>
  )
}

export default RestaurantCard
