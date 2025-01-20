/* eslint-disable no-unreachable */
import React from 'react';

interface ProfileProps {
	// name: string;
	// image: string;
}

const Profile: React.FC<ProfileProps> = (props) => {
	return <img src='https://i.imgur.com/MK3eW3As.jpg' alt='Katherine Johnson' />;
	//Example usage if props were used:
	// <p>{props.name}</p>
	// <img src={props.image} alt={props.name} />
};

export default Profile;
