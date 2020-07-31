import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Grid, Typography } from '@material-ui/core'

export function PhotographyGallery () {
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
    <Grid container direction="row" spacing={1} justify="space-between">
      <Grid container item sm={6} spacing={1} direction="column">
        <Grid item>
          <Img fluid={data.portrait.childImageSharp.fluid} />
          <Typography>portrait</Typography>
        </Grid>
      </Grid>      
      <Grid container item sm={6} spacing={1} direction="column" justify="space-between">
        <Grid item>
          <Img fluid={data.craft.childImageSharp.fluid} />
          <Typography>craft</Typography>
          <Img fluid={data.event.childImageSharp.fluid} />
          <Typography>event</Typography>
        </Grid>        
      </Grid>
    </Grid>            
  </React.Fragment>  
  )
}

// PhotographyGallery.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default PhotographyGallery
