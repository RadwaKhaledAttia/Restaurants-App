import React, { FC, useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { Container, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useStyles from './style'

interface Props {
  setSearchValue: (value: string) => void
}

const Search: FC<Props> = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState('')

  const getSearch = useCallback(debounce(setInputValue, 300), [
    inputValue,
    setInputValue,
  ])

  useEffect(() => {
    setSearchValue(inputValue)
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
        <Grid item lg={8} md={10} sm={10}>
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
