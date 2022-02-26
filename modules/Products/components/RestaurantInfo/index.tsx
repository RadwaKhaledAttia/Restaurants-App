import React, { FC } from 'react'
import { Card } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { Brand } from '../../../../inteface'
import useStyles from './style'

interface Props {
  brand: Brand | undefined
}

const RestaurantInfo: FC<Props> = ({ brand }) => {
  const classes = useStyles()
  return (
    <div className={classes.RestaurantInfoContainer}>
      <img src={brand?.logo} alt={brand?.name} />
      <div className={classes.RestaurantInfoContent}>
        <p> {brand?.description} </p>
        <h3>Branches:</h3>
        <div className="branches">
          {brand?.branches.map(branch => (
            <h5 key={branch.name}>{branch.name}</h5>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RestaurantInfo
