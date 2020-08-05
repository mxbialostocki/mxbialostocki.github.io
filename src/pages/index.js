import React from "react"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import Pages from "../components/pages"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <SEO title="Home" />
      <Grid container direction="column" spacing={4}>

        <Grid item>
          <Typography variant="h2">hello, Creature</Typography>
        </Grid>        
        <Grid item>
          <Typography variant="h5">My name is Bam.</Typography>
          <Typography variant="h5">I am the dev you're looking for.</Typography>
        </Grid>

      </Grid>
      <Pages />
    </Layout>
  </React.Fragment>
    

)

export default IndexPage
