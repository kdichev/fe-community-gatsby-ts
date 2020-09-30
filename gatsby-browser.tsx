import * as React from "react"
import { GatsbyBrowser } from "gatsby"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <div>{element}</div>
