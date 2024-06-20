/** @format */

import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
	mutation UpdateProfile(
		$fullname: String!
		$file: Upload
		$chatroomId: Float
	) {
		updateProfile(
        $fullname: $fullname
		$file: $file
		$chatroomId: $chatroomId
		) {
			
				id
				fullname
				avatarUrl
			
		}
	}
`;
