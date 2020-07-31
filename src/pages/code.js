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
    <Typography variant="h1">
      Code
    </Typography>
    <Typography variant="h4">
      Welcome to some cool code things
    </Typography>
    <ProjectWSIR />
    <ProjectScaffolding />
    <Link to="/">go home</Link>
  </Layout>
)

export default Code
