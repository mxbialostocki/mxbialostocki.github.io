import React from "react"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotographyGallery from "../components/photographyGallery"
import Link from "../components/link"

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const Photography = () => {
  const { primary } = useStyles()
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Photography" />
        <Grid container direction="column" spacing={4}>
          
          <Grid item>
            <Typography variant="h5">
              I apply a developed, personal method to my portraiture and offer event photography at fair prices. <Link to='/contact'><span  className={primary}>Contact me</span></Link> to start a conversation about your needs or book in a session.
            </Typography>
          </Grid>

        </Grid>
        <PhotographyGallery />
        
      </Layout>
    </React.Fragment>
  )
}

export default Photography
