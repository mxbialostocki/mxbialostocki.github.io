import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  primary: {
    color: '#f50057'
  },
  layout: {
    margin: `0 auto`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
    minHeight: '100vh',
    padding: `9rem 1.0875rem 6rem 1.0875rem`,
    [theme.breakpoints.down('sm')]: {
      padding: `9rem 1.0875rem 0 1.0875rem`, 
    }    
  },
  header: {
    background: `#ffffff`,
    position: 'fixed',
    top: '0',
    zIndex: '10',
    width: '100vw',
  },
  lastChild: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  },
  headerWrap: {
    margin: `0 auto`,
    padding: `1rem 1rem 0 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    }
  },
  footer: {
    background: `#ffffff`,
    position: 'fixed',
    bottom: '0rem',
    zIndex: '10',
    width: '100vw',    
  },
  footerWrap: {
    margin: `0 auto`,
    padding: `1rem 1rem 1rem 1rem`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
  },
  headerContainer: {
    height: '1rem',
    borderBottom: 'solid #f50057 1px'
  },
  projectHeroContainer: {
    maxWidth: '100%',
    padding: '.5rem',
    marginBottom: '.5rem',
    [theme.breakpoints.down('md')]: {
      padding: '0 .5rem'
    }
  },
  projectHero: {
    boxShadow: '5px 5px 10px grey',
    margin: '1rem 0',
  },
  stack: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(2)'
    }
  },
}));

export default useStyles