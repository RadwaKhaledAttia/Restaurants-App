import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  productCardContainer: {
    padding: '30px 20px',
    background: '#FFFFFF',
    boxShadow: '0px 3px 60px #0340630F',
    borderRadius: 8,
    '& .productCardImage:hover .iconContianer': {
      opacity: 1,
      bottom: -10,
    },
  },
  productCardContent: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    '& img': {
      width: 200,
      height: 150,
      borderRadius: 8,
    },
    '@media(max-width: 450px)': {
      display: 'block',
      textAlign: 'center',
    },
  },
  productCardRight: {
    marginLeft: 20,
    '& p': {
      color: '#7D7D7D',
    },
    '& .price': {
      color: '#0A4950',
    },
  },
  productCardImage: {
    position: 'relative',
    cursor: 'pointer',
    textAlign: 'center',
  },
  iconContianer: {
    position: 'absolute',
    bottom: -20,
    right: 0,
    left: 0,
    opacity: 0,
    width: 35,
    height: 35,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    background: '#f6ff00',
    WebkitTransition: 'all 0.4s ease-in-out 0s',
    MozTransition: 'all 0.4s ease-in-out 0s',
    transition: 'all 0.4s ease-in-out 0s',
    '& svg': {
      color: '#0A4950',
    },
  },
}))

export default useStyles
