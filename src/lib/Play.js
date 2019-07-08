import React from 'react';
import propTypes from 'prop-types';

const Resources = props => {
	const style = {
		width: `${props.width}`,
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 232.153 232.153"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
			className={`icon-itn resources-icon ${props.svgClass}`}
			style={style}
		>
			<path
				d="M203.79 99.628L49.307 2.294C44.74-.425 39.07.028 34.786.028 17.654.028 17.73 13.255 17.73 16.606v198.94c0 2.833-.075 16.58 17.056 16.58 4.283 0 9.955.45 14.52-2.267L203.8 132.525c12.68-7.545 10.49-16.45 10.49-16.45s2.192-8.904-10.488-16.448z"
				fill={props.fill}
			/>
		</svg>
	);
};

Resources.propTypes = {
	width: propTypes.string,
	ariaHidden: propTypes.string,
	focusable: propTypes.string,
	fill: propTypes.string,
	svgClass: propTypes.string,
};

Resources.defaultProps = {
	ariaHidden: 'true',
	focusable: 'false',
	fill: '#30353a',
};

export default Resources;
