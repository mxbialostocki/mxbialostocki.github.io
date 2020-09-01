import React from "react"
import PropTypes from "prop-types"
import { Grid, Typography } from "@material-ui/core"

import Link from '../components/link'

import useStyles from "../../plugins/custom-mui-theme/theme/custom"

const Header = ({ siteTitle }) => {

  const { header, headerWrap, lastChild, headerContainer } = useStyles()

  return (
    <React.Fragment>
      <header data-e2e='header' className={header}>
        <div className={headerWrap}>
          <Grid container direction='row' justify='flex-start' spacing={1} >
            
              <Grid item xl={3} md={3} xs={12}>
                <Link to="/">
                  <Typography variant={"h5"}>{siteTitle}</Typography>
                </Link>
              </Grid>
              <Grid item xl={3} md={3} xs={5}>
                <Link to="/photography">
                  <Typography variant={"h5"}>photography</Typography>  
                </Link>            
              </Grid>
              <Grid item xl={2} md={3} xs={3}>
                <Link to="/code">
                  <Typography variant={"h5"}>code</Typography>  
                </Link>            
              </Grid>
              <Grid item xl={4} md={3} xs={4}>
                <Link to="/contact">
                  <Typography variant={"h5"} className={lastChild}>contact</Typography>  
                </Link>            
              </Grid>

          </Grid>
          <div className={headerContainer}></div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
