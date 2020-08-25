import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from './link'
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const Projects = () => {
  const data = useStaticQuery(graphql`
  query {
    scaffoldingprimary: file(relativePath: { eq: "scaffolding-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whatshouldireadprimary: file(relativePath: { eq: "whatshouldiread-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mxbialostocki: file(relativePath: { eq: "mxbialostocki-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  const { projectHero, projectHeroContainer } = useStyles()

  return (    
    <React.Fragment>
      <Grid container direction='row' spacing={4} >
        
        <Grid item md={6} xs={12} className={projectHeroContainer}>
          <Link to="https://whatshouldiread-cassidy.herokuapp.com/">
            <Img fluid={data.whatshouldireadprimary.childImageSharp.fluid} className={projectHero}/>
            <Typography variant="h4" >what should i read</Typography>
            <Typography variant="body1" >React, GraphQL, MongoDB</Typography>
          </Link>
          <Link to="https://github.com/mxbialostocki/cassidy">
            <Typography variant="body1" >github</Typography>
          </Link>
        </Grid>
        <Grid item md={6} xs={12} className={projectHeroContainer}>
          <Link to="https://scaffolding-xtw.herokuapp.com/">
            <Img fluid={data.scaffoldingprimary.childImageSharp.fluid} className={projectHero}/>
            <Typography variant="h4" >scaffolding</Typography>
            <Typography variant="body1" >React, Javascript, Poetry</Typography>
          </Link>
          <Link to="https://github.com/mxbialostocki/scaffolding">
            <Typography variant="body1" >github</Typography>
          </Link>
        </Grid>
        <Grid item md={6} xs={12} className={projectHeroContainer}>
          <Link to="/">
            <Img fluid={data.mxbialostocki.childImageSharp.fluid} className={projectHero}/>
            <Typography variant="h4" >this site</Typography>
            <Typography variant="body1" >Gatsby, Material-UI, React</Typography>
          </Link>
          <Link to="https://github.com/mxbialostocki/mxbialostocki.github.io">
            <Typography variant="body1" >github</Typography>
          </Link>
        </Grid>

      </Grid>         
    </React.Fragment>
  )
}

export default Projects
