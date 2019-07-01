import React from 'react';
import Account from './Account';
import Message from './Message';
import Network from './Network';
import Profile from './Profile';
import Resources from './Resources';

const Icon = props => {
	switch (props.iconName) {
		case 'account':
			return <Account {...props} />;
		case 'message':
			return <Message {...props} />;
		case 'network':
			return <Network {...props} />;
		case 'profile':
			return <Profile {...props} />;
		case 'resources':
			return <Resources {...props} />;
		default:
			return <div>Check the iconName prop is correct</div>;
	}
};

export default Icon;
