import { GatsbyNode } from "gatsby"
import path from "path"
import { Reservation_ListQuery } from "./graphql-types"

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { data } = await graphql<Reservation_ListQuery>(/* GraphQL */ `
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
