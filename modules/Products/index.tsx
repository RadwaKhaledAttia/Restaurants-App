import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import data from '../../data.json'
import Card from './components/Card'
import { Item } from '../../inteface'
import useStyles from './style'

const Restaurants: FC = () => {
  const { query } = useRouter()
  const { name } = query
  const [products, setProducts] = useState<Item[] | undefined>()

  useEffect(() => {
    const brand = data.brands.find(item => item.name === name)
    setProducts(brand?.items)
  }, [name])

  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <div className={classes.productTitle}>
            <Link href="/">
              <a>
                <ArrowBackIcon />
              </a>
            </Link>
            <h1> {name} </h1>
          </div>
        </Grid>
        {products &&
          products.map(product => (
            <Grid item lg={12} key={product.name}>
              <Card product={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default Restaurants
