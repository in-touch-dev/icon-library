import React from 'react';
import Icon from './components/icons/InTouchIcons';

const App = props => {
	return (
		<React.Fragment>
			<Icon
				iconName={'account'}
				fill={'green'}
				width={'200px'}
				ariaHidden={'true'}
				focusable={'false'}
			/>
			<Icon
				iconName={'message'}
				fill={'green'}
				width={'200px'}
				ariaHidden={'true'}
				focusable={'false'}
			/>
		</React.Fragment>
	);
};

export default App;
