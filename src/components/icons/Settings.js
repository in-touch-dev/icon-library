import React from 'react';
import propTypes from 'prop-types';

const Settings = props => {
	const style = {
		width: `${props.width}`,
	};

	return (
		<svg
			className="settings-icon"
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 60 60"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
		>
			<defs>
				<path id="A" d="M0 0h60v60H0z" />
			</defs>
			<path
				d="M35.6 30a5.59 5.59 0 1 1 0-11.2 5.59 5.59 0 1 1 0 11.2m7.8-10.8l2.8-2.8-2.7-2.7-2.8 2.8c-1-.7-2.1-1.1-3.3-1.4v-3.9h-3.8v3.9c-1.2.2-2.3.7-3.3 1.4l-2.8-2.8-2.5 2.7 2.8 2.8c-.7 1-1.1 2.1-1.4 3.3h-3.9v3.8h3.9c.2 1.2.7 2.3 1.4 3.3L25 32.4l2.7 2.7 2.8-2.8c1 .7 2.1 1.1 3.3 1.4v3.9h3.8v-4c1.2-.2 2.3-.7 3.3-1.4l2.8 2.8 2.7-2.7-2.8-2.8c.7-1 1.1-2.1 1.4-3.3h3.9v-3.8h-4c-.3-1.1-.8-2.2-1.5-3.2M35.6 45C24.2 45 15 35.8 15 24.4S24.2 3.8 35.6 3.8 56.2 13 56.2 24.4 47 45 35.6 45M7 55.7c-.7.7-1.9.7-2.7 0-.7-.7-.7-1.9 0-2.7l12.8-12.8c.8.9 1.7 1.8 2.7 2.7L7 55.7zM35.6 0C22.2 0 11.2 10.9 11.2 24.4c0 4.7 1.3 9.1 3.7 12.8L1.7 50.4c-2.2 2.2-2.2 5.8 0 7.9 1.1 1.1 2.5 1.7 4 1.7s2.9-.6 4-1.7l13.2-13.2c3.7 2.3 8.1 3.7 12.8 3.7 13.4 0 24.3-11 24.3-24.4S49.1 0 35.6 0"
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
};

Settings.defaultProps = {
	ariaHidden: 'true',
	focusable: 'false',
	fill: '#30353a',
};

export default Settings;
