import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  MenuTagContainer: {
    paddingBottom: 20,
    borderBottom: '3px solid #e3cb21',
  },
  MenuVarietiesItemImage: {
    position: 'relative',
    cursor: 'pointer',
    '& img': {
      width: 190,
      height: 120,
      borderRadius: 8,
      margin: 'auto',
    },
    '& p': {
      textAlign: 'center',
      margin: 10,
    },
  },
}))

export default useStyles
