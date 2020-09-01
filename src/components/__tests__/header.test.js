import React from "react"
import renderer from "react-test-renderer"

import Header from '../header'

describe("layout", () => {
  it("Renders correctly", () => {
    const tree = renderer.create(<Header siteTitle="mxbialostocki" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})