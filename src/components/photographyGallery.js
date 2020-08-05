import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Grid, Typography } from '@material-ui/core'

const PhotographyGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "mxbialostocki191126-sgts04-1129.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      craft: file(relativePath: { eq: "mxbialostocki191126-sgts04-1270.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      event: file(relativePath: { eq: "mxbialostocki191126-sgts04-1891.jpg" }) {
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
        
          <Grid item lg={3} md={6} xs={12}>
            <Img fluid={data.portrait.childImageSharp.fluid} />
            <Typography variant="h5">portrait</Typography>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Img fluid={data.event.childImageSharp.fluid} />
            <Typography variant="h5">event</Typography>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Img fluid={data.craft.childImageSharp.fluid} />
            <Typography variant="h5">craft</Typography>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Img fluid={data.event.childImageSharp.fluid} />
            <Typography variant="h5">event</Typography>
          </Grid>

      </Grid>      
    </React.Fragment>
  )
}

export default PhotographyGallery
