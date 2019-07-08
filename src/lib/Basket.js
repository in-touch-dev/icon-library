import React from 'react';
import propTypes from 'prop-types';

const Settings = props => {
	const style = {
		width: `${props.width}`,
	};

	return (
		<svg
			className={`icon-itn resources-icon ${props.svgClass}`}
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 510 510"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
		>
			<path
				d="M153 408c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51zM0 0v51h51l91.8 193.8-35.7 61.2c-2.55 7.65-5.1 17.85-5.1 25.5 0 28.05 22.95 51 51 51h306v-51H163.2c-2.55 0-5.1-2.55-5.1-5.1v-2.55l22.95-43.35h188.7c20.4 0 35.7-10.2 43.35-25.5l91.8-165.75c5.1-5.1 5.1-7.65 5.1-12.75 0-15.3-10.2-25.5-25.5-25.5H107.1L84.15 0H0zm408 408c-28.05 0-51 22.95-51 51s22.95 51 51 51 51-22.95 51-51-22.95-51-51-51z"
				fill={props.fill}
			/>
		</svg>
	);
};

Settings.propTypes = {
	width: propTypes.string,
	ariaHidden: propTypes.string,
	focusable: propTypes.string,
	fill: propTypes.string,
	svgClass: propTypes.string,
};

Settings.defaultProps = {
	ariaHidden: 'true',
	focusable: 'false',
	fill: '#30353a',
};

export default Settings;
