import React from "react"
import { Typography } from '@material-ui/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Typography variant='h1'>NOT FOUND</Typography>
    <Typography variant='body1'>Existence is futile, the page you're lookin' for doesn't persist</Typography>
    <Typography variant='body1'>... but check back soon because it probably will in a few days :O</Typography>
  </Layout>
)

export default NotFoundPage
