import { gql } from "@apollo/client";

export const GET_PAGE_DATA = gql`
  query PageData($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      staffs: staff {
        id
        name {
          full
          userPreferred
        }
        languageV2
        gender
        dateOfBirth {
          year
          month
          day
        }
        primaryOccupations
      }
    }
  }
`;
