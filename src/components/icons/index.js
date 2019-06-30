import React from 'react';
import AccountDark from './AccountDark';
import MessageDark from './MessageDark';
import NetworkDark from './NetworkDark';

const Icon = props => {
	switch (props.iconName) {
		case 'accountDark':
			return <AccountDark {...props} />;
			break;
		case 'messageDark':
			return <MessageDark {...props} />;
			break;
		case 'networkDark':
			return <NetworkDark {...props} />;
			break;
		default:
			return <div>Check the iconName prop is correct</div>;
	}
};

export default Icon;
