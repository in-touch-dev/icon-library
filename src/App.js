import React from 'react';
import Icon from './components/icons/InTouchIcons';

const App = props => {
	return (
		<Icon
			iconName={'account'}
			fill={'green'}
			width={'200px'}
			ariaHidden={'true'}
			focusable={'false'}
		/>
	);
};

export default App;
