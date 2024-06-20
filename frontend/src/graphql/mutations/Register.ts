import {gql} from "@apollo/client"

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $fullname: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ){
    register(
        registerInput:{
            fullName: $fullname,
            email: $email,
            password: $password,
            confirmPassword: $confirmPassword,
        }
    ){
        user {
            id
            fullname
            email
        }
    }
  }
`