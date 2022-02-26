import React, { FC, useState, useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import data from '../../data.json'
import Card from './components/Card'
import { Brand } from '../../inteface'

interface Props {
  searchValue: string
}

const Restaurants: FC<Props> = ({ searchValue }) => {
  const [brands, setBrands] = useState(data.brands)

  useEffect(() => {
    setBrands([...data.brands].filter(item => item.name.toLowerCase().includes(searchValue)))
  }, [searchValue])

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
