import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from './link'
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"

const Pages = () => {
  const data = useStaticQuery(graphql`
    query {
      code: file(relativePath: { eq: "mxbialostocki200525-lockdown-myco-1458.jpg" }) {
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
      <Grid container direction="column" sm={12} spacing={1}>
        
          <Grid item>
            <Link to="/code">
              <Img fluid={data.code.childImageSharp.fluid}/>
              <Typography>code</Typography>
            </Link>
          </Grid>
            
          <Grid item>
            <Link to="/photography">
              <Img fluid={data.photography.childImageSharp.fluid} />
              <Typography>photography</Typography>
            </Link>
          </Grid>

          <Grid item>
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
