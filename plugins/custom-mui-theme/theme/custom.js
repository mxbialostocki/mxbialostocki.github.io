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
      paddingTop: '8rem'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
    height: '100vh',
    padding: `0 1.0875rem 1.45rem`,    
  },
  header: {
    background: `#ffffff`,
    marginBottom: `1.45rem`,
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      top: 0,
      zIndex: '10'
    },
  },
  headerWrap: {
    margin: `0 auto`,
    padding: `1rem 0`,
    borderBottom: 'solid #f50057 .5px'
  },
  projectHeroContainer: {
    maxWidth: '100%',
    padding: '.5rem',
    marginBottom: '.5rem'
  },
  projectHero: {
    boxShadow: '5px 5px 10px grey',
    margin: '2rem 0',
  }
}));

export default useStyles