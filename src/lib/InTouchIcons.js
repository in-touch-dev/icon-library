import React from 'react';
import Account from './Account';
import Message from './Message';
import Network from './Network';
import Profile from './Profile';
import Resources from './Resources';
import Work from './Work';
import Settings from './Settings';
import Close from './Close';
import Play from './Play';
import Basket from './Basket';

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
		case 'work':
			return <Work {...props} />;
		case 'settings':
			return <Settings {...props} />;
		case 'close':
			return <Close {...props} />;
		case 'play':
			return <Play {...props} />;
		case 'basket':
			return <Basket {...props} />;
		default:
			return <div>Check the iconName prop is correct</div>;
	}
};

export default Icon;
