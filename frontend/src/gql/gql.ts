/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddUsersToChatroom($chatroomId: Float!, $userIds: [Float!]!) {\n    addUsersToChatroom(chatroomId: $chatroomId, userIds: $userIds) {\n      name\n      id\n    }\n  }\n": types.AddUsersToChatroomDocument,
    "\n  mutation CreateChatroom($name: String!) {\n    createChatroom(name: $name) {\n      name\n      id\n    }\n  }\n": types.CreateChatroomDocument,
    "\n  mutation DeleteChatroom($chatroomId: Float!) {\n    deleteChatroom(chatroomId: $chatroomId)\n  }\n": types.DeleteChatroomDocument,
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n        avatarUrl\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation LogoutUser {\n    logout\n  }\n": types.LogoutUserDocument,
    "\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ){\n    register(\n        registerInput:{\n            fullname: $fullname,\n            email: $email,\n            password: $password,\n            confirmPassword: $confirmPassword,\n        }\n    ){\n        user {\n            id\n            fullname\n            email\n        }\n    }\n  }\n": types.RegisterUserDocument,
    "\n  mutation UpdateProfile($fullname: String!, $file: Upload) {\n    updateProfile(fullname: $fullname, file: $file) {\n      id\n      fullname\n      avatarUrl\n    }\n  }\n": types.UpdateProfileDocument,
    "\n  query GetChatroomsForUser($userId: Float!) {\n    getChatroomsForUser(userId: $userId) {\n      id\n      name\n      messages {\n        id\n        content\n        createdAt\n        user {\n          id\n          fullname\n        }\n      }\n      users {\n        avatarUrl\n        id\n        fullname\n        email\n      }\n    }\n  }\n": types.GetChatroomsForUserDocument,
    "\n  query GetMessagesForChatroom($chatroomId: Float!) {\n    getMessagesForChatroom(chatroomId: $chatroomId) {\n      id\n      content\n      imageUrl\n      createdAt\n      user {\n        id\n        fullname\n        email\n        avatarUrl\n      }\n      chatroom {\n        id\n        name\n        users {\n          id\n          fullname\n          email\n          avatarUrl\n        }\n      }\n    }\n  }\n": types.GetMessagesForChatroomDocument,
    "\n  query GetUsersOfChatroom($chatroomId: Float!) {\n    getUsersOfChatroom(chatroomId: $chatroomId) {\n      id\n      fullname\n      email\n      avatarUrl\n    }\n  }\n": types.GetUsersOfChatroomDocument,
    "\n  query SearchUsers($fullname: String!) {\n    searchUsers(fullname: $fullname) {\n      id\n      fullname\n      email\n    }\n  }\n": types.SearchUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddUsersToChatroom($chatroomId: Float!, $userIds: [Float!]!) {\n    addUsersToChatroom(chatroomId: $chatroomId, userIds: $userIds) {\n      name\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation AddUsersToChatroom($chatroomId: Float!, $userIds: [Float!]!) {\n    addUsersToChatroom(chatroomId: $chatroomId, userIds: $userIds) {\n      name\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChatroom($name: String!) {\n    createChatroom(name: $name) {\n      name\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChatroom($name: String!) {\n    createChatroom(name: $name) {\n      name\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteChatroom($chatroomId: Float!) {\n    deleteChatroom(chatroomId: $chatroomId)\n  }\n"): (typeof documents)["\n  mutation DeleteChatroom($chatroomId: Float!) {\n    deleteChatroom(chatroomId: $chatroomId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n        avatarUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    login(loginInput: { email: $email, password: $password }) {\n      user {\n        email\n        id\n        fullname\n        avatarUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LogoutUser {\n    logout\n  }\n"): (typeof documents)["\n  mutation LogoutUser {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ){\n    register(\n        registerInput:{\n            fullname: $fullname,\n            email: $email,\n            password: $password,\n            confirmPassword: $confirmPassword,\n        }\n    ){\n        user {\n            id\n            fullname\n            email\n        }\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser(\n    $fullname: String!\n    $email: String!\n    $password: String!\n    $confirmPassword: String!\n  ){\n    register(\n        registerInput:{\n            fullname: $fullname,\n            email: $email,\n            password: $password,\n            confirmPassword: $confirmPassword,\n        }\n    ){\n        user {\n            id\n            fullname\n            email\n        }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProfile($fullname: String!, $file: Upload) {\n    updateProfile(fullname: $fullname, file: $file) {\n      id\n      fullname\n      avatarUrl\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfile($fullname: String!, $file: Upload) {\n    updateProfile(fullname: $fullname, file: $file) {\n      id\n      fullname\n      avatarUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChatroomsForUser($userId: Float!) {\n    getChatroomsForUser(userId: $userId) {\n      id\n      name\n      messages {\n        id\n        content\n        createdAt\n        user {\n          id\n          fullname\n        }\n      }\n      users {\n        avatarUrl\n        id\n        fullname\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetChatroomsForUser($userId: Float!) {\n    getChatroomsForUser(userId: $userId) {\n      id\n      name\n      messages {\n        id\n        content\n        createdAt\n        user {\n          id\n          fullname\n        }\n      }\n      users {\n        avatarUrl\n        id\n        fullname\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMessagesForChatroom($chatroomId: Float!) {\n    getMessagesForChatroom(chatroomId: $chatroomId) {\n      id\n      content\n      imageUrl\n      createdAt\n      user {\n        id\n        fullname\n        email\n        avatarUrl\n      }\n      chatroom {\n        id\n        name\n        users {\n          id\n          fullname\n          email\n          avatarUrl\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMessagesForChatroom($chatroomId: Float!) {\n    getMessagesForChatroom(chatroomId: $chatroomId) {\n      id\n      content\n      imageUrl\n      createdAt\n      user {\n        id\n        fullname\n        email\n        avatarUrl\n      }\n      chatroom {\n        id\n        name\n        users {\n          id\n          fullname\n          email\n          avatarUrl\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsersOfChatroom($chatroomId: Float!) {\n    getUsersOfChatroom(chatroomId: $chatroomId) {\n      id\n      fullname\n      email\n      avatarUrl\n    }\n  }\n"): (typeof documents)["\n  query GetUsersOfChatroom($chatroomId: Float!) {\n    getUsersOfChatroom(chatroomId: $chatroomId) {\n      id\n      fullname\n      email\n      avatarUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchUsers($fullname: String!) {\n    searchUsers(fullname: $fullname) {\n      id\n      fullname\n      email\n    }\n  }\n"): (typeof documents)["\n  query SearchUsers($fullname: String!) {\n    searchUsers(fullname: $fullname) {\n      id\n      fullname\n      email\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;