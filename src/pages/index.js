import React from "react"
import { Grid, Typography } from '@material-ui/core'

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

import Layout from "../components/layout"
import Pages from "../components/pages"
import SEO from "../components/seo"

const IndexPage = () => {
  const { primary } = useStyles()
  
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Home" />
        <Grid container direction="column" spacing={4}>

          <Grid item>
            <Typography variant="h2" style={{ paddingBottom: '1rem' }}>hello, Creature</Typography>
            <Typography variant="h5">My name is Bam.</Typography>
            <Typography variant="h5" className={primary}>I am the dev you're looking for.</Typography>
          </Grid>

        </Grid>
        <Pages />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
