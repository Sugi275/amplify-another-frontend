/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEnvtest = /* GraphQL */ `
  query GetEnvtest($id: ID!) {
    getEnvtest(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listEnvtests = /* GraphQL */ `
  query ListEnvtests(
    $filter: ModelenvtestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnvtests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
