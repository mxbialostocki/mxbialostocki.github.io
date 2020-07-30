import React from "react"
import { Link } from "gatsby"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photography = () => (
  <Layout>
    <SEO title="Photography" />
    <Grid container direction="column">
      <Typography variant="h4">
        Some things I say about photography: Look at all these things I say
      </Typography>
      <Link to="/">Go back to the homepage</Link>
    </Grid>
    
  </Layout>
)

export default Photography
