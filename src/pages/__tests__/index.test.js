import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"

import Index from "../index"

describe("Index Page", () => {
  const renderer = new ShallowRenderer()
  it("renders correctly", () => {
    const tree = renderer.render(
    <Index />
    )
    expect(tree).toMatchSnapshot()
  })
})
