import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    productTitle: {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            fontSize: 35,
            marginRight: 20,
        },
    },
}))

export default useStyles
