import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from './link'
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"

import useStyle from '../../plugins/custom-mui-theme/theme/custom'

const ProjectScaffolding = () => {
  const data = useStaticQuery(graphql`
    query {
      scaffoldingprimary: file(relativePath: { eq: "scaffolding-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [ projectHeroContainer, projectHero ] = useStyle()

  return (    
    <React.Fragment>
      <Grid container direction="column" spacing={2} className={projectHeroContainer}>

          <Grid item>
            <Img fluid={data.scaffoldingprimary.childImageSharp.fluid} className={projectHero}/>
          
            <Link to="https://scaffolding-xtw.herokuapp.com/">
              <Typography variant="h2">scaffolding</Typography>
            </Link>

            <Typography variant="h5">React, Javascript, Poetry</Typography>

            <Link to="https://github.com/mxbialostocki/scaffolding">
              <Typography>github</Typography>
            </Link>
          </Grid>
          
        </Grid>
    </React.Fragment>
  )
}

export default ProjectScaffolding
