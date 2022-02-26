import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  RestaurantInfoContainer: {
    padding: '30px 20px',
    background: '#FFFFFF',
    border: '1px solid #e3cb21',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: 200,
      height: 200,
      borderRadius: 8,
    },
    '@media(max-width: 450px)': {
      display: 'block',
      textAlign: 'center',
    },
  },
  RestaurantInfoContent: {
    marginLeft: 20,
    width: '70%',
    '& p': {
      color: '#7A7A7A',
    },
    '& h5': {
      margin: 5,
      color: '#0A4950',
    },
    '& .branches': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    '@media(max-width: 450px)': {
    marginLeft: 0,
      width: '100%',
    },
  },
}))

export default useStyles
