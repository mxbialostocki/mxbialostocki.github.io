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
          Hi, Creature
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">My name is Bam.</Typography>
        <Typography variant="h5">I am the dev you're looking for.</Typography>
      </Grid>
    </Grid>
    <Link to="/photography/">
      <Grid item style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
        <Image />
      </Grid>   
    </Link>     
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
