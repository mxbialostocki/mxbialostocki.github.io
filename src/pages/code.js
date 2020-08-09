import React from "react"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects'

const Code = () => (
  <Layout>
    <SEO title="code" />
    
    <Grid container direction="row" spacing={4}>

      <Grid item md={10}>
        <Typography variant="h5">
          I'm a full-stack dev with a current focus on web development. My preferred resources are below, along with a few projects I've worked on lately. I'm always open to new challenges, so please get in touch with me if you'd like to work together.
        </Typography>
      </Grid>
      
      <Grid item sm={12}>
        <Projects />
      </Grid>

    </Grid> 
    
  </Layout>
)

export default Code
