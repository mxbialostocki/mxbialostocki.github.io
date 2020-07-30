import React from "react"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import Image from "../components/image"
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
    <Link to="/photography/" spacing={4}>
      <Grid item style={{ padding: '2rem 0' }} >
        <Image style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}/>
        <Typography>photography</Typography>
      </Grid>   
    </Link>   
    <Grid container spacing={4}>
      <Grid item>
        <Typography>
          <Link to="/code/">code</Link>      
        </Typography>
        <Typography>
          <Link to="https://www.mypronouns.org/they-them">pronouns</Link>
        </Typography>
      </Grid>      
    </Grid>    
  </Layout>
)

export default IndexPage
