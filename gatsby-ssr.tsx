import * as React from "react"
import { WrapRootElementNodeArgs } from "gatsby"

export const wrapRootElement = async ({ element }: WrapRootElementNodeArgs) => (
  <div>{element}</div>
)
