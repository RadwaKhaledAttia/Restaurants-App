import React, { FC, useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { Container, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Store, useStore } from '../../store'
import useStyles from './style'

const Search: FC = () => {
  const { setSearchInput } = useStore((state: Store) => state)
  const [inputValue, setInputValue] = useState('')

  const getSearch = useCallback(debounce(setInputValue, 200), [
    inputValue,
    setInputValue,
  ])

  useEffect(() => {
    setSearchInput(inputValue)
  }, [inputValue])

  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={8} md={10} sm={10} xs={12}>
          <div className={classes.searchContiner}>
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="What would you like to buy?"
              value={inputValue}
              onChange={e => getSearch(e.target.value)}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Search
