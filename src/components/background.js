import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from "prop-types"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Background = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background-moon.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div>{children}</div>
        </BackgroundImage>
      )
    }}
  />
)

Background.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
}

const StyledBackground = styled(Background)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackground