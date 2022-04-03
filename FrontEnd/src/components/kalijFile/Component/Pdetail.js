import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    margin: '0 auto',
    width: '98%',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 45px',
      width: '85%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: '0rem',
    },
  },
  btn: {
    textTransform: 'capitalize',
    margin: 'auto',
    padding: '8px 20px',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 15px',
  },
  buy: {
    margin: 'auto',
    padding: '8px 20px',
    backgroundColor: '#ED9F64',
    border: '0px solid white',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: "#FE540B",
      color: 'white',
    },
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    display: 'inline-block',
    borderRadius: '10px',
    padding: ' 5px 10px',
    backgroundColor: '#ED9F64',
    color: 'white',
    marginTop: '10px',
  },
  time: {
    display: 'inline-block',
    padding: '10px',
    color: 'lightGray',
  },
  message: {
    padding: '10px',
    color: 'gray',
    margin: '10px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  section1: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  imageSection: {
    margin: 'auto',
  },
  recommendedPosts: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}));