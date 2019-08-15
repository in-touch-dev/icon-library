import React from 'react';
import Icon from './lib/InTouchIcons';

const App = props => {
	const style = {
		width: '150px',
		margin: '0 auto',
	};
	return (
		<div style={style}>
			<Icon iconName={'account'} />
			<Icon iconName={'message'} />
			<Icon iconName={'network'} />
			<Icon iconName={'profile'} />
			<Icon iconName={'resources'} />
			<Icon iconName={'work'} />
			<Icon iconName={'settings'} />
			<Icon iconName={'close'} />
			<Icon iconName={'play'} />
			<Icon iconName={'basket'} />
			<Icon iconName={'episode'} />
			<Icon iconName={'category'} />
		</div>
	);
};

export default App;
