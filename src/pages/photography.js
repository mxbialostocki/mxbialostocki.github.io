import React from "react"
import { Link } from "gatsby"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotographyGallery from "../components/photographyGallery"

const Photography = () => (
  <Layout>
    <SEO title="Photography" />
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h4">
          Some things I say about photography: Look at all these things I say
        </Typography>
      </Grid>
    </Grid>
    <PhotographyGallery />
    <Grid item>
      <Link to="/">go home</Link>
    </Grid>
  </Layout>
)

export default Photography
