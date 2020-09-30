import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Reservations</h1>
      {data.api.reservation.map(reservation => (
        <Link
          to={`/${reservation.id}`}
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              border: "1px solid gray",
              padding: 10,
              marginBottom: 10,
            }}
          >
            <p>ID: {reservation.id}</p>
            <p>Created at: {reservation.created_at}</p>
            <p>Updated at: {reservation.updated_at}</p>
          </div>
        </Link>
      ))}
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const INDEX_QUERY = graphql`
  query {
    api {
      reservation {
        id
        created_at
        updated_at
      }
    }
  }
`

export default IndexPage
