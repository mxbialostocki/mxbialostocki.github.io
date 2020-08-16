import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid } from '@material-ui/core'

import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import useStyles from "../../plugins/custom-mui-theme/theme/custom"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { layout } = useStyles()

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Grid container direction="row" justify="space-between" className={layout}>

      <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
          <main>{children}</main>
        </Grid>
        <Grid item xs={12}>
        </Grid>

        
      </Grid>
      <Footer />
      
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
