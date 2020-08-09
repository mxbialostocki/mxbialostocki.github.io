import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Grid, Typography } from '@material-ui/core'

const PhotographyGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      portrait1: file(relativePath: { eq: "portrait5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portrait2: file(relativePath: { eq: "portrait2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portrait3: file(relativePath: { eq: "portrait3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portrait4: file(relativePath: { eq: "portrait4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portrait6: file(relativePath: { eq: "portrait6.jpg" }) {
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
        
          <Grid item md={6} xs={12}>
            <Img fluid={data.portrait1.childImageSharp.fluid} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Img fluid={data.portrait4.childImageSharp.fluid} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Img fluid={data.portrait3.childImageSharp.fluid} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Img fluid={data.portrait6.childImageSharp.fluid} />
          </Grid>

      </Grid>      
    </React.Fragment>
  )
}

export default PhotographyGallery
