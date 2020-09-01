import React from "react"
import renderer from "react-test-renderer"

import Link from '../link'

describe("Link", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Link/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})