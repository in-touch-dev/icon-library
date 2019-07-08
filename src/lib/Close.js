import React from 'react';
import propTypes from 'prop-types';

const Close = props => {
	const style = {
		width: `${props.width}`,
	};

	return (
		<svg
			className={`icon-itn resources-icon ${props.svgClass}`}
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="19 15 22 30"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
		>
			<defs>
				<path id="A" d="M0 0h59.7v59.7H0z" />
			</defs>
			<path
				d="M30 33.8l4.7 8.4h6.2l-8-12.8 7.5-11.8h-5.9l-4.5 8-4.4-8h-6.1l7.5 12-7.9 12.6h6z"
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
	focusable: 'false',
	fill: '#30353a',
};

export default Close;
