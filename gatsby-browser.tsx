import * as React from "react"
import { WrapRootElementNodeArgs } from "gatsby"

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => (
  <div>{element}</div>
)
