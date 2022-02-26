import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  MenuTags: {
    marginBottom: '80px',
    padding: '20px 0px',
    '& .slick-list': {
      margin: '0 -15px',
    },
    '& .slick-slide>div': {
      padding: '0 15px',
    },

    '& .slick-dots ': {
      bottom: '-85px',
    },
    '& .slick-slide :focus  ': {
      outline: 'none',
    },

    '& .slick-dots li.slick-active button::before': {
      opacity: '1',
      color: '#E50019',
      background: '#1E1E1E',
      width: '100%',
      height: '6px',
    },

    '& .slick-dots li': {
      width: 'calc(100% / 9)',
      margin: '0',
      height: 6,
    },

    '& .slick-dots li button::before': {
      content: '""',
      height: '6px',
      top: -5,
    },

    '& ul.slick-dots': {
      textAlign: 'left',
      backgroundColor: '#ccc',
      height: 6,
    },
    '&   .slick-next,.slick-prev ': {
      top: 90,
    },
    '& .slick-prev': {
      right: 'inherit',
      left: 0,
      marginRight: 20,
      '@media (max-width: 767px)': {
        right: 40,
      },
      '@media (max-width: 320px)': {
        right: 25,
      },
      '@media (max-width: 280px)': {
        right: 20,
      },
    },
    '& .slick-next': {
      left: 'inherit',
      right: 0,
      '& svg': {
        '@media (max-width: 320px)': {
          left: '6px !important',
        }
      }
    },

    '&  .slick-prev:before , .slick-next:before': {
      content: '""',
    },
    '& .slick-next,  .slick-prev': {
      width: 50,
      borderRadius: 50,
      height: 50,
      color: '#fff',
      background: '#000',
      zIndex: 9,
      '@media (max-width: 767px)': {
        width: 40,
        height: 40,
      },
      '@media (max-width: 320px)': {
        width: 35,
        height: 35,
      },
    },
    '& .slick-arrow.slick-prev.slick-disabled svg , .slick-arrow.slick-next.slick-disabled':
    {
      opacity: 0.75,
    },
    '& svg': {
      position: 'relative',
      width: 32,
      height: 32,
      color: '#fff',
      top: 0,
      left: 0,
      margin: 'auto',
      '@media (max-width: 767px)': {
        left: 10,
        width: 30,
        height: 30,
        top: 4,
      },
      '@media (max-width: 320px)': {
        left: 10,
        width: 25,
        height: 25,
        top: 5,
      },
    },

    '@media (max-width:599px)': {
      marginBottom: 0,

    },
  },
  MenuVarietiesItemImage: {
    position: 'relative',

  },
  MenuVarietiesItemContent: {
    position: 'absolute',
    left: '45%',
    top: '100%',
    transform: 'translate(-50%,-100%)',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    '& p': {
      color: '#fff',
      fontSize: 20,
      margin: '15px 0',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontFamily: 'Roboto-Medium',
      cursor: 'pointer',
      '@media(max-width: 768px)': {
        fontSize: 18
      },
      '@media(max-width: 320px)': {
        fontSize: 16
      },
    },
    '@media(max-width: 768px)': {
      left: '50%',
    },

  },
}))

export default useStyles
