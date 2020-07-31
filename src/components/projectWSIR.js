import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from './link'
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"

const style = {  
  imgContainer: {
    maxWidth: '100%'
  },
  img: {
    maxWidth: '80%',
    boxShadow: '5px 5px 10px grey',
    margin: '2rem 0'
  }
}

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

  

  return (    
    <React.Fragment>
      <Grid container direction="column" spacing={2} style={style.imgContainer}>

          <Grid item>
            <Img fluid={data.whatshouldireadprimary.childImageSharp.fluid} style={style.img}/>
          
            <Link to="https://whatshouldiread-cassidy.herokuapp.com/">
              <Typography variant="h2">what should i read</Typography>
            </Link>

            <Typography variant="h5">// React, GraphQL, MongoDB</Typography>

            <Link to="https://github.com/mxbialostocki/cassidy">
              <Typography>github</Typography>
            </Link>
          </Grid>

        </Grid>
    </React.Fragment>
  )
}

export default ProjectWSIR
