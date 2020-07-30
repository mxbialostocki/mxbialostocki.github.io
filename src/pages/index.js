import React from "react"
import { Link } from "gatsby"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h1">
          Hi, People
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">Welcome to your new Gatsby site.</Typography>
        <Typography variant="h5">Now go build something great.</Typography>
      </Grid>
    </Grid>
    <Grid item style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <Image />
    </Grid>    
    <Grid container>
      <Grid item>
        <Typography>
          <Link to="/page-2/">Go to page 2</Link>      
        </Typography>
        <Typography>
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </Typography>
      </Grid>      
    </Grid>    
  </Layout>
)

export default IndexPage
