import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { Index_PageQuery } from "./../../graphql-types"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps<Index_PageQuery>> = ({ data }) => {
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
            <p>
              Client name: {reservation.client.first_name}
              {reservation.client.last_name}
            </p>
          </div>
        </Link>
      ))}
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const INDEX_QUERY = graphql`
  query INDEX_PAGE {
    api {
      reservation {
        id
        created_at
        updated_at
        client {
          first_name
          last_name
        }
      }
    }
  }
`

export default IndexPage
