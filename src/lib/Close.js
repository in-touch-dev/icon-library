import React from 'react';
import propTypes from 'prop-types';

const Close = props => {
	const style = {
		width: `${props.width}`,
	};

	return (
		<svg
			className={`icon-itn message-icon ${props.svgClass}`}
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 212.982 212.982"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
		>
			<path
				d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"
				fill={props.fill}
			/>
		</svg>
	);
};

Close.propTypes = {
	width: propTypes.string,
	ariaHidden: propTypes.string,
	focusable: propTypes.string,
	fill: propTypes.string,
	svgClass: propTypes.string,
};

Close.defaultProps = {
	ariaHidden: 'true',
	svgClass: '',
	focusable: 'false',
	fill: '#30353a',
};

export default Close;
