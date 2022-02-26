import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  productHeader: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: 35,
      marginRight: 20,
    },
  },
}))

export default useStyles
