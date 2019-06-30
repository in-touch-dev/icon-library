import React from 'react';
import Icon from './components/icons/InTouchIcons';

const App = props => {
	const style = {
		width: '150px',
	};

	return (
		<div style={style}>
			<Icon iconName={'accountDark'} fill="green" />
		</div>
	);
};

export default App;
