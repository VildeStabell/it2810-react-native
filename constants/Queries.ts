/**
 * A file containing the GraphQL queries used to interact with the backend api.
 */

import { gql } from "@apollo/client";

/**
 * Returns a set of books based on the search term, selected filters and sorting.
 * The resulting set of books is dynamically loaded based on the page number and
 * requested number of books (size).
 * The search term searches for partial matches in both title and author
 */

export const GET_BOOKS_BY_SEARCH = gql`
  query BooksBySearch(
    $search: String
    $filters: [String]
    $page: Int
    $size: Int
    $sortBy: String
  ) {
    booksBySearch(
      search: $search
      filters: $filters
      page: $page
      size: $size
      sortBy: $sortBy
    ) {
      id
      title
      author
      genres
      image
    }
  }
`;

/**
 * Returns the book corresponding to the specified ID
 */

export const GET_BOOK_BY_ID = gql`
  query BookById($id: ID!) {
    bookById(id: $id) {
      id
      title
      author
      genres
      image
    }
  }
`;

/**
 * Returns the username of a user corresponding to the given jwt token
 */

export const GET_USER_INFO = gql`
  query UserInfo($token: String) {
    userInfo(token: $token) {
      username
    }
  }
`;
