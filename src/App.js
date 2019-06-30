import React from 'react';
import Icon from './components/Icon';
import Logo from './icons';

const App = props => {
	const { iconName } = props;
	return <Icon iconName={iconName} />;
};

export default App;
