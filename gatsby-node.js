const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(/* GraphQL */ `
    query RESERVATION_LIST {
      api {
        reservation {
          id
        }
      }
    }
  `)
  data.api.reservation.map(({ id }) =>
    actions.createPage({
      path: `/${id}`,
      component: path.resolve(`src/templates/reservation.tsx`),
      context: { id },
    })
  )
}
