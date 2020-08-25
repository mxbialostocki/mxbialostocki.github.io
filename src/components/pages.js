import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from './link'
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"
import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const Pages = () => {
  const data = useStaticQuery(graphql`
    query {
      code: file(relativePath: { eq: "background-moon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photography: file(relativePath: { eq: "mxbialostocki200525-lockdown-myco-1728.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pronouns: file(relativePath: { eq: "mxbialostocki200309-harakeke-julia-639.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { link } = useStyles()

  return (    
    <React.Fragment>
      <Grid container direction='row' spacing={4} >
        
          <Grid item lg={4} md={6} xs={12} className={link}>
            <Link to="/code">
              <Img fluid={data.code.childImageSharp.fluid} />
              <Typography variant="h5">code</Typography>
            </Link>
          </Grid>
          <Grid item lg={4} md={6} xs={12} className={link}>
            <Link to="/photography">
              <Img fluid={data.photography.childImageSharp.fluid} />
              <Typography variant="h5">photography</Typography>
            </Link>
          </Grid>
          <Grid item lg={4} md={12} xs={12} className={link}>
            <Link to="https://www.mypronouns.org/they-them">
              <Img fluid={data.pronouns.childImageSharp.fluid} />
              <Typography variant="h5">pronouns</Typography>
            </Link>
          </Grid>         

      </Grid>         
    </React.Fragment>
  )
}

export default Pages
