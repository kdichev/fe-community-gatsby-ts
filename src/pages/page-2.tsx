import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Writing a gatsby project in TS" />
    <h3>Why we would want to do that?</h3>
    <h3>
      What do we need to consider when implementing types in exising project?
    </h3>
    <ul>
      <li>
        Backend types{" "}
        <a href="http://localhost:52327/console/api-explorer">schema</a>
      </li>
      <li>
        Gatsby js files{" "}
        <a href="https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/index.d.ts">
          url
        </a>
      </li>
      <li>
        Gatsby types{" "}
        <a href="https://github.com/gatsbyjs/gatsby/issues/1457">#1457</a>
      </li>
    </ul>
    <h3>Lets try to do it now 😂</h3>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
