import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    padding: '5.6rem 1rem',
  },
  container1: {
    padding: '7.2rem 1.7rem',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper1: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  Error: {
    color: 'white',
    fontSize: '12px',
    fontStyle: 'bold',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '5px',
    padding: '12px 5px 12px 5px',
    backgroundColor: '#f21818',
    borderRadius: '5px',
  },
  success: {
    color: 'white',
    fontSize: '12px',
    fontStyle: 'bold',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '5px',
    borderRadius: '5px',
    padding: '12px 5px 12px 5px',
    backgroundColor: '#17a2b8',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#4abdac',
  },
  formData: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  label: {
    color: "black"
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    backgroundColor: '#4abdac',
    color: 'white',
    letterSpacing: '2px',
    '&:hover': {
      backgroundColor: '#008f95',
    },
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: '#4abdac',
    color: 'white',
    fontSize: '14px',
    letterSpacing: '1px',
    '&:hover': {
      backgroundColor: '#008f95',
    },
  },
}));