import React from "react"
import PropTypes from "prop-types"
import { Grid, Typography } from "@material-ui/core"

import Link from '../components/link'

import useStyles from "../../plugins/custom-mui-theme/theme/custom"

const Header = ({ siteTitle }) => {

  const { header, headerWrap } = useStyles()

  return (
    <React.Fragment>
      <header className={header}>
        <div className={headerWrap}>
          <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={2}>
            
              <Grid item md={3} xs={12}>
                <Link to="/">
                  <Typography variant={"h5"}>{siteTitle}</Typography>
                </Link>
              </Grid>
              <Grid item md={3}>
                <Link to="/404">
                  <Typography variant={"h5"}>photography</Typography>  
                </Link>            
              </Grid>
              <Grid item md={3}>
                <Link to="/code">
                  <Typography variant={"h5"}>code</Typography>  
                </Link>            
              </Grid>
              <Grid item md={3}>
                <Link to="/contact">
                  <Typography variant={"h5"}>contact</Typography>  
                </Link>            
              </Grid>

          </Grid>
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
