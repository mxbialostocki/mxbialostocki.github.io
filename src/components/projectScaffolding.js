import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from './link'
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"

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

  const style = {  
    imgContainer: {
      maxWidth: '100%',
      padding: '20px 0'
    },
    img: {
      maxWidth: '80%',
      boxShadow: '5px 5px 10px grey',
      margin: '2rem 0'
    }
  }

  return (    
    <React.Fragment>
      <Grid container direction="column" spacing={2} style={style.imgContainer}>

          <Grid item>
            <Img fluid={data.scaffoldingprimary.childImageSharp.fluid} style={style.img}/>
          
            <Link to="https://scaffolding-xtw.herokuapp.com/">
              <Typography variant="h2">scaffolding</Typography>
            </Link>

            <Typography variant="h5">// React, Javascript, Poetry</Typography>

            <Link to="https://github.com/mxbialostocki/scaffolding">
              <Typography>github</Typography>
            </Link>
          </Grid>
          
        </Grid>
    </React.Fragment>
  )
}

export default ProjectScaffolding
