import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Reservation = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Reservation</h1>
      <div
        style={{
          border: "1px solid gray",
          padding: 10,
          marginBottom: 10,
        }}
      >
        <p>ID: {pageContext.id}</p>
        <p>Arrival Date at: {data.api.reservation.arrival_date}</p>
        <p>Departure Date at: {data.api.reservation.departure_date}</p>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const INDEX_QUERY = graphql`
  query($id: api_uuid!) {
    api {
      reservation: reservation_by_pk(id: $id) {
        arrival_date
        departure_date
      }
    }
  }
`

export default Reservation
