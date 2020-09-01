import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"

import Layout from '../layout'
import { useStaticQuery } from "gatsby"

// const { useStaticQuery } = jest.requireMock("gatsby")

beforeAll(() => {
  useStaticQuery.mockReturnValue({
    site: {
      siteMetadata: {
        title: "Mock Title",
        description: "Mock Description"
      }
    }
  })
})

describe("Layout", () => {
  const renderer = new ShallowRenderer()
  const children = 'children'  
  it("renders correctly", () => {
    const tree = renderer.render(
      <Layout>{children}</Layout>
    )
    expect(tree).toMatchSnapshot()
  })
})