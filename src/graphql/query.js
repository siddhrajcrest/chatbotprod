import { gql } from "@apollo/client";

export const GET_UNIQUE_ID_DETAILS = gql`
  query getUniqueIdDetails($widgetId: String!) {
    getUniqueIdDetails(widgetId: $widgetId) {
      companyId
      companyName
      locationId
      locationName
      flowType
    }
  }
`;
