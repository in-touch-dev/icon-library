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
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 59.7 59.7"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
		>
			<defs>
				<path id="A" d="M0 0h59.7v59.7H0z" />
			</defs>
			<path
				d="M24.9 34.8c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0 2.7 7.2 0 9.9-7.2 2.8-9.9 0m16.4-2.6h4.9v-4.7h-4.9c-.3-1.4-.8-2.8-1.7-4.1l3.5-3.5-3.3-3.3-3.5 3.5c-1.3-.8-2.7-1.4-4.1-1.7v-4.9h-4.7v4.9c-1.4.3-2.8.8-4.1 1.7l-3.5-3.5-3.3 3.3 3.5 3.5c-.8 1.3-1.4 2.7-1.7 4.1h-4.9v4.7h4.9c.3 1.4.8 2.8 1.7 4.1l-3.5 3.5 3.3 3.3 3.5-3.5c1.3.8 2.7 1.4 4.1 1.7v4.9h4.7v-4.9c1.4-.3 2.8-.8 4.1-1.7l3.5 3.5 3.3-3.3-3.5-3.5c.9-1.2 1.4-2.6 1.7-4.1"
				fill={props.fill}
			/>
			<defs>
				<path id="C" d="M0 0h59.7v59.7H0z" />
			</defs>
			<path
				d="M56.5 29.9c0 14.7-11.9 26.6-26.6 26.6S3.3 44.6 3.3 29.9 15.2 3.3 29.9 3.3s26.6 11.9 26.6 26.6m3.2 0C59.7 13.4 46.4 0 29.9 0S0 13.4 0 29.9s13.4 29.9 29.9 29.9 29.8-13.4 29.8-29.9"
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
