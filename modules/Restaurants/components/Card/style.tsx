import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  restaurantCardContainer: {
    padding: '30px 20px',
    background: '#FFFFFF',
    boxShadow: '0px 3px 60px #0340630F',
    borderRadius: 8,
  },
  restaurantCardContent: {
    display: 'flex',
    alignItems: 'flex-start',
    '& img': {
      width: 150,
      height: 150,
    },
    '@media(max-width: 450px)': {
      display: 'block',
      textAlign: 'center',
    },
  },
  restaurantCardRight: {
    marginLeft: 20,
    '& p': {
      color: '#7D7D7D',
    },
  },
}))

export default useStyles
