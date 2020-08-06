import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from './link'
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"

import useStyle from '../../plugins/custom-mui-theme/theme/custom'

const ProjectWSIR = () => {
  const data = useStaticQuery(graphql`
    query {
      whatshouldireadprimary: file(relativePath: { eq: "whatshouldiread-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { projectHeroContainer, projectHero } = useStyle()

  return (    
    <React.Fragment>
      <Grid container direction="column" spacing={2} className={projectHeroContainer}>

          <Grid item>
            <Img fluid={data.whatshouldireadprimary.childImageSharp.fluid} className={projectHero}/>
          
            <Link to="https://whatshouldiread-cassidy.herokuapp.com/">
              <Typography variant="h3">what should i read</Typography>
            </Link>

            <Typography variant="h5">React, GraphQL, MongoDB</Typography>

            <Link to="https://github.com/mxbialostocki/cassidy">
              <Typography>github</Typography>
            </Link>
          </Grid>

        </Grid>
    </React.Fragment>
  )
}

export default ProjectWSIR
