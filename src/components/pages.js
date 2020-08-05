import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from './link'
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"

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

  return (    
    <React.Fragment>
      <Grid container direction='row' spacing={4} >
        
          <Grid item lg={4} md={6} xs={12}>
            <Link to="/404">
              <Img fluid={data.code.childImageSharp.fluid} />
              <Typography>code</Typography>
            </Link>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Link to="/404">
              <Img fluid={data.photography.childImageSharp.fluid} />
              <Typography>photography</Typography>
            </Link>
          </Grid>
          <Grid item lg={4} md={12} xs={12}>
            <Link to="https://www.mypronouns.org/they-them">
              <Img fluid={data.pronouns.childImageSharp.fluid} />
              <Typography>pronouns</Typography>
            </Link>
          </Grid>         

      </Grid>         
    </React.Fragment>
  )
}

export default Pages
