import * as React from "react"
import { GatsbyBrowser } from "gatsby"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = async ({
  element,
}) => <div>{element}</div>
