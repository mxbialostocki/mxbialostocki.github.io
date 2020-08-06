import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  layout: {
    margin: `0 auto`,
    maxWidth: '70vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw'
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100vw'
    },
    height: '100vh',
    padding: `0 1.0875rem 1.45rem`,    
  },
  header: {
    background: `none`,
    marginBottom: `1.45rem`,
  },
  headerWrap: {
    margin: `0 auto`,
    padding: `1.45rem 0`,
    borderBottom: 'solid #f50057 .5px'
  }
}));

export default useStyles