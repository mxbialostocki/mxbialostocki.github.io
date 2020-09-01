import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"

import Code from "../code"
import { useStaticQuery } from "gatsby"

beforeAll(() => {
  const childImageSharp = {
    fluid: {
      base64: "base64",
      aspectRatio: "aspectRatio",
      src: "src",
      srcSet: "srcSet",
      sizes: "sizes"
    }
  }
  useStaticQuery.mockReturnValue({
    react: {
      childImageSharp
    },
    graphqlicon: {
      childImageSharp
    },
    nodejs: {
      childImageSharp
    },
    gatsby: {
      childImageSharp
    },
    materialui: {
      childImageSharp
    },
    mongodb: {
      childImageSharp
    },
    github: {
      childImageSharp
    }
  })
})

describe("Code Page", () => {
  const renderer = new ShallowRenderer()
  it("renders correctly", () => {
    const tree = renderer.render(
      <Code/>
    )
    expect(tree).toMatchSnapshot()
  })
})