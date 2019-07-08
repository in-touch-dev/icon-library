import React from 'react';
import propTypes from 'prop-types';

const Profile = props => {
	const style = {
		width: `${props.width}`,
	};

	return (
		<svg
			className={`icon-itn profile-icon ${props.svgClass}`}
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 56.4 54.6"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
		>
			<defs>
				<path id="A" d="M0 0h56.4v54.6H0z" />
			</defs>
			<path
				d="M37 17.6h-5.7l-1.4-5.7c-.2-.8-.9-1.3-1.7-1.3s-1.5.5-1.7 1.3l-1.4 5.7h-5.7c-.7 0-1.4.4-1.6 1.1-.3.7-.1 1.4.4 1.9l4.5 4.5-1.4 4.2c-.2.7 0 1.5.6 2s1.4.5 2 .1l4.3-2.9 4.3 2.9a1.69 1.69 0 0 0 1 .3c.4 0 .8-.1 1.1-.4.6-.5.8-1.2.6-2l-1.4-4.2 4.5-4.5c.5-.5.7-1.3.4-1.9-.4-.6-1-1-1.7-1.1m15.8 17.7c0 1.9-1.6 3.5-3.5 3.5H35.2c-.6 0-1.2.3-1.5.9l-5.5 9.7-5.5-9.7c-.3-.6-.9-.9-1.5-.9H7c-1.9 0-3.5-1.6-3.5-3.5V7.1c0-1.9 1.6-3.5 3.5-3.5h42.3c1.9 0 3.5 1.6 3.5 3.5v28.2zM49.3 0H7.1c-3.9 0-7 3.2-7 7v28.2c0 3.9 3.2 7.1 7 7.1h13.1l6.5 11.4c.3.6.9.9 1.5.9s1.2-.3 1.5-.9l6.5-11.4h13.1c3.9 0 7.1-3.2 7.1-7V7c0-3.8-3.2-7-7.1-7"
				fill={props.fill}
			/>
		</svg>
	);
};

Profile.propTypes = {
	width: propTypes.string,
	ariaHidden: propTypes.string,
	focusable: propTypes.string,
	fill: propTypes.string,
	svgClass: propTypes.string,
};

Profile.defaultProps = {
	ariaHidden: 'true',
	svgClass: '',
	focusable: 'false',
	fill: '#30353a',
};

export default Profile;
