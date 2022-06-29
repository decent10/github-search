import {gql} from  '@apollo/client';

export const GET_USER_SEARCH = gql`
    query($query : String!, $first: Int!, $after: String , $before: String){
          search(query:$query, type: USER, first:$first, after:$after, before:$before ) {
            userCount
             pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
                }
            edges {
                node {
                ... on User {
                    id
                    login
                    email
                    name
                    avatarUrl
                    url
                    bio
                    location
                }
                }
            }
        }
}`