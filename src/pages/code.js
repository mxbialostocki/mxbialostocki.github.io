import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography, Hidden } from '@material-ui/core'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects'

import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const Code = () => {
  const data = useStaticQuery(graphql`
    query {
      react: file(relativePath: { eq: "icon-react.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graphqlicon: file(relativePath: { eq: "icon-graphql.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nodejs: file(relativePath: { eq: "icon-nodejs.png" }) {
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
      materialui: file(relativePath: { eq: "icon-materialui.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mongodb: file(relativePath: { eq: "icon-mongodb.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "icon-github.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { stack } = useStyles()
  return (
    <React.Fragment>
      <Layout>
        <SEO title="code" />
        
        <Grid container direction="row" spacing={4}>

          <Grid item md={11}>
            <Typography variant="h5">
              I'm a full-stack dev with a current focus on web development. A few projects I've worked on lately are below. I'm always open to new challenges, so please get in touch with me if you'd like to work together.
            </Typography>
          </Grid>

        </Grid>
        <Hidden only={['xs', 'sm', 'md']}>
          <Grid container direction='row' justify="center" alignItems="center" spacing={6} style={{ padding: '1rem 0'}}>

            <Grid item xs={1} >
              <Img fluid={data.react.childImageSharp.fluid} className={stack}/>
            </Grid>
            <Grid item xs={1}>
              <Img fluid={data.graphqlicon.childImageSharp.fluid} className={stack}/>
            </Grid>
            <Grid item xs={1}>
              <Img fluid={data.nodejs.childImageSharp.fluid} className={stack}/>
            </Grid>
            <Grid item xs={1}>
              <Img fluid={data.gatsby.childImageSharp.fluid} className={stack}/>
            </Grid>
            <Grid item xs={1}>
              <Img fluid={data.materialui.childImageSharp.fluid} className={stack}/>
            </Grid>
            <Grid item xs={1}>
              <Img fluid={data.mongodb.childImageSharp.fluid} className={stack}/>
            </Grid>
            <Grid item xs={1}>
              <Img fluid={data.github.childImageSharp.fluid} className={stack}/>
            </Grid>

          </Grid>
        </Hidden>
        <Grid container direction='row' spacing={4}>
        
          <Grid item sm={12}>
            <Projects />
          </Grid>

        </Grid>       
      </Layout>
    </React.Fragment>
  )
}

export default Code
