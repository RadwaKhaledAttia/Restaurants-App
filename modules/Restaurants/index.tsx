import React, { FC, useState, useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import data from '../../data.json'
import Card from './components/Card'
import { Brand } from '../../inteface'
import { Store, useStore } from '../../store'

const Restaurants: FC = () => {
  const { searchTag, searchInput } = useStore((state: Store) => state)

  const [brands, setBrands] = useState(data.brands)

  useEffect(() => {
    setBrands(
      [...data.brands].filter(item =>
        item.name.toLowerCase().includes(searchInput),
      ),
    )
  }, [searchInput])

  useEffect(() => {
    if (searchTag !== '') {
      setBrands(
        [...data.brands].filter(item =>
          item.tags.find(value => value.name === searchTag),
        ),
      )
    }
  }, [searchTag])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <h1> Restaurants </h1>
        </Grid>
        {brands.map((brand: Brand) => (
          <Grid item lg={12} key={brand?.name}>
            <Card brand={brand} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Restaurants
