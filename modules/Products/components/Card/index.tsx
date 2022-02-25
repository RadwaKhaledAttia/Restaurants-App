import React, { FC } from 'react'
import { Card } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Item } from '../../../../inteface'
import useStyles from './style'

interface Props {
  product: Item
}

const RestaurantCard: FC<Props> = ({ product }) => {
  const classes = useStyles()

  return (
    <Card className={classes.productCardContainer}>
      <div className={classes.productCardContent}>
        <div className={classes.productCardRight}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h3 className="price">{product.price}</h3>
        </div>
        <div className={`${classes.productCardImage} productCardImage`}>
          <img src={product.image} alt={product.name} />
          <div className={`${classes.iconContianer} iconContianer`}>
            <ShoppingBagIcon />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default RestaurantCard
