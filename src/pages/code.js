import React from "react"
import { Link } from "gatsby"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Code = () => (
  <Layout>
    <SEO title="Page two" />
    <Grid container direction="column">
      <Typography variant="h1">
        Code
      </Typography>
      <Typography variant="h4">
        Welcome to some cool code things
      </Typography>
    </Grid>
    <Link to="/">go home</Link>
  </Layout>
)

export default Code
