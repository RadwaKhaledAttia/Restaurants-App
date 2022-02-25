import { Container, Grid } from '@mui/material'
import data from '../../data.json'
import Card from './components/Card'
import { Brand } from '../../inteface'

const Restaurants = () => (
  <Container maxWidth="lg">
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <h1> Restaurants </h1>
      </Grid>
      {data.brands.map((brand: Brand) => (
        <Grid item lg={12} key={brand?.name}>
          <Card brand={brand} />
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default Restaurants
