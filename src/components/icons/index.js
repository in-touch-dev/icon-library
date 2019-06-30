import React from 'react';
import AccountDark from './AccountDark';
import MessageDark from './MessageDark';
import NetworkDark from './NetworkDark';

const Icon = props => {
	switch (props.iconName) {
		case 'accountDark':
			return <AccountDark {...props} />;
		case 'messageDark':
			return <MessageDark {...props} />;
		case 'networkDark':
			return <NetworkDark {...props} />;
		default:
			return <div>Empty div </div>;
	}
};

export default Icon;
