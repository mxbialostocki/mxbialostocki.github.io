import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography, Link } from '@material-ui/core'

import Header from "./header"

import "./layout.css"
import useStyle from "../../plugins/custom-mui-theme/theme/custom"

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
  const styles = useStyle()

  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between" className={styles.layout}>

        <Grid item xs={12}>
          <Header siteTitle={data.site.siteMetadata.title} />
        </Grid>
        <Grid item xs={12}>
          <main>{children}</main>
        </Grid>

        <Grid container item xs={12} alignContent='flex-end'>

          <footer>          
            <Typography variant='body1'>
              © {new Date().getFullYear()}, Built with{` `}<Link to="https://www.gatsbyjs.org">Gatsby</Link>
            </Typography>          
          </footer>
          
        </Grid>
        
      </Grid>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
