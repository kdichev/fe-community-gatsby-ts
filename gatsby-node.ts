import { GatsbyNode } from "gatsby"
import path from "path"
import { Api_Reservation } from "./graphql-types"

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { data } = await graphql<{
    api: { reservation: Array<Api_Reservation> }
  }>(/* GraphQL */ `
    query RESERVATION_LIST {
      api {
        reservation {
          id
        }
      }
    }
  `)
  data?.api.reservation.map(({ id }) =>
    actions.createPage({
      path: `/${id}`,
      component: path.resolve(`src/templates/reservation.tsx`),
      context: { id },
    })
  )
}
