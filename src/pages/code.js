import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography } from '@material-ui/core'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects'

const Code = () => {
  const data = useStaticQuery(graphql`
    query {
      react: file(relativePath: { eq: "stack-icon-react.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graphqlicon: file(relativePath: { eq: "stack-icon-graphql.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nodejs: file(relativePath: { eq: "stack-icon-nodejs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      materialui: file(relativePath: { eq: "stack-icon-material-ui.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mongodb: file(relativePath: { eq: "stack-icon-mongodb.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "stack-icon-github.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="code" />
      
      <Grid container direction="row" spacing={4}>

        <Grid item md={11}>
          <Typography variant="h5">
            I'm a full-stack dev with a current focus on web development. A few projects I've worked on lately are below. I'm always open to new challenges, so please get in touch with me if you'd like to work together.
          </Typography>
        </Grid>
        
      </Grid>
      <Grid container direction='row' justify="center" spacing={6}>

        <Grid item xs={1}>
          <Img fluid={data.react.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={1}>
          <Img fluid={data.graphqlicon.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={1}>
          <Img fluid={data.nodejs.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={1}>
          <Img fluid={data.gatsby.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={1}>
          <Img fluid={data.materialui.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={1}>
          <Img fluid={data.mongodb.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={1}>
          <Img fluid={data.github.childImageSharp.fluid} />
        </Grid>

      </Grid>
      <Grid container direction='row' spacing={4}>
      
      <Grid item sm={12}>
        <Projects />
      </Grid>

      </Grid>       
    </Layout>
  )
}

export default Code
