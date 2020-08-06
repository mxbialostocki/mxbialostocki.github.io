import React from "react"
import PropTypes from "prop-types"
import { Grid, Typography } from "@material-ui/core"

import Link from '../components/link'

import useStyle from "../../plugins/custom-mui-theme/theme/custom"

const Header = ({ siteTitle }) => {

  const { header, headerWrap } = useStyle()

  return (
    <React.Fragment>
      <header className={header}>
        <div className={headerWrap}>
          <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={2}>
            
              <Grid item lg={3} xs={12}>
                <Link to="/">
                  <Typography variant={"h5"}>{siteTitle}</Typography>
                </Link>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Link to="/photography">
                  <Typography variant={"h5"}>photography</Typography>  
                </Link>            
              </Grid>
              <Grid item lg={3} xs={12}>
                <Link to="/code">
                  <Typography variant={"h5"}>code</Typography>  
                </Link>            
              </Grid>
              <Grid item lg={3} xs={12}>
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
