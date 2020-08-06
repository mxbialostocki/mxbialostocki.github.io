import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Grid, Typography } from "@material-ui/core"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 0`,
        borderBottom: 'solid #f50057 .5px'
      }}
    >
      <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={2}>
        
          <Grid item lg={3} xs={12}>
            <Link to="/" activeStyle={{ color: '#f50057' }}>
              <Typography variant={"h5"}>{siteTitle}</Typography>
            </Link>
          </Grid>
          <Grid item lg={3} xs={12}>
            <Link to="/photography" activeStyle={{ color: '#f50057' }}>
              <Typography variant={"h5"}>photography</Typography>  
            </Link>            
          </Grid>
          <Grid item lg={3} xs={12}>
            <Link to="/code" activeStyle={{ color: '#f50057' }}>
              <Typography variant={"h5"}>code</Typography>  
            </Link>            
          </Grid>

      </Grid>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
