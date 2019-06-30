import React from 'react';
import Icon from './components/icons/index';

const App = props => {
	const style = {
		width: '150px',
	};

	return (
		<div style={style}>
			<Icon iconName={'messageDark'} fill="green" />
		</div>
	);
};

export default App;
