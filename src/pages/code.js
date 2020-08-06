import React from "react"
import { Link } from "gatsby"
import { Grid, Typography } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectWSIR from '../components/projectWSIR'
import ProjectScaffolding from '../components/projectScaffolding'

const Code = () => (
  <Layout>
    <SEO title="code" />
    <Typography variant="h5">
      Welcome to some cool code things
    </Typography>
    <Grid container direction="row" justify="space-between" spacing={10}>

      <Grid item md={6} sm={12}>
        <ProjectWSIR />
      </Grid>
      <Grid item md={6} sm={12}>
        <ProjectScaffolding />
      </Grid>

    </Grid>    
  </Layout>
)

export default Code
