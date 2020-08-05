import React from "react"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotographyGallery from "../components/photographyGallery"

const Photography = () => (
  <React.Fragment>
    <Layout>
      <SEO title="Photography" />
      <Grid container direction="column" spacing={4}>

        <Grid item>
          <Typography variant="h2">photography</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Some things I say about photography: Look at all these things I say
          </Typography>
        </Grid>

      </Grid>
      <PhotographyGallery />
      <Grid container direction='row' spacing={4} >
        <Grid item lg={12}>
          <Typography variant='h2'>`rate card`</Typography>
        </Grid>
      </Grid>
    </Layout>
  </React.Fragment>
)

export default Photography
