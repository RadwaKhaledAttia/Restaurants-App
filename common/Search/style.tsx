import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  searchContiner: {
    margin: '30px 0',
    width: '100%',
    height: 60,
    borderRadius: 60,
    display: 'flex',
    alignItems: 'center',
    background: '#F8F8F8',
    '& .searchIcon': {
      margin: 15,
      color: '#7A7A7A',
      '& svg': {
        fontSize: 35,
      },
    },
    '& input': {
      background: '#F8F8F8',
      width: '90%',
      height: 60,
      borderRadius: 60,
      border: 0,
      fontSize: 18,
      fontWeight: 400,
      '& input#outlined-basic': {
        fontSize: 18,
        fontWeight: 400,
        padding: 18,
      },
      '&::placeholder input#pin': {
        color: 'red',
        background: '#F2F2F2',
      },
      '&:focus-visible': {
        outline: 0,
      },
    },
  },
}))

export default useStyles
