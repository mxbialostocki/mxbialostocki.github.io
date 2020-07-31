import React from "react"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import Pages from "../components/pages"
import SEO from "../components/seo"
import Link from "../components/link"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Typography variant="h1">
          Hi, Creature
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">My name is Bam.</Typography>
        <Typography variant="h5">I am the dev you're looking for.</Typography>
      </Grid>
    </Grid>
    <Pages />
  </Layout>
)

export default IndexPage
