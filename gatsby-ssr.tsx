import * as React from "react"
import { GatsbySSR } from "gatsby"

export const wrapRootElement: GatsbySSR["wrapRootElement"] = async ({
  element,
}) => <div>{element}</div>
