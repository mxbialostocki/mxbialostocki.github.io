import React from "react"
import { Grid, Typography } from "@material-ui/core"

import Link from './link'

import useStyles from "../../plugins/custom-mui-theme/theme/custom"

const Footer = () => {

  const { footer, footerWrap, primary } = useStyles()

  return (
    <React.Fragment>
      <footer className={footer}>
        <div className={footerWrap}>
          <Grid container direction='row' justify='flex-start' alignItems='flex-start' spacing={1} >
            
              <Grid item md={12} xs={12}>
                <Typography variant='body2'>
                  © {new Date().getFullYear()}, Built by{` `}<Link to='/'><span  className={primary}>mxbialostocki</span></Link> with{` `}<Link to="https://www.gatsbyjs.org">Gatsby</Link>
                </Typography>          
              </Grid>

          </Grid>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
