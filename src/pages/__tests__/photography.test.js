import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"

import Photography from "../photography"

describe("Photography Page", () => {
  const renderer = new ShallowRenderer()
  it("renders correctly", () => {
    const tree = renderer.render(
    <Photography />
    )
    expect(tree).toMatchSnapshot()
  })
})
