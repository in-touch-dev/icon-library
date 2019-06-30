import React from 'react';
import propTypes from 'prop-types';
// import IconIndex from './IconIndex';

const Icon = props => {
	if (props.iconName) {
	}
	const { iconName } = props;

	return { iconName };
};

Icon.propTypes = {
	iconName: propTypes.string.isrequired,
};

export default Icon;
