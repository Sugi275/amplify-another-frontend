/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEnvtest = /* GraphQL */ `
  mutation CreateEnvtest(
    $input: CreateEnvtestInput!
    $condition: ModelenvtestConditionInput
  ) {
    createEnvtest(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateEnvtest = /* GraphQL */ `
  mutation UpdateEnvtest(
    $input: UpdateEnvtestInput!
    $condition: ModelenvtestConditionInput
  ) {
    updateEnvtest(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteEnvtest = /* GraphQL */ `
  mutation DeleteEnvtest(
    $input: DeleteEnvtestInput!
    $condition: ModelenvtestConditionInput
  ) {
    deleteEnvtest(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
