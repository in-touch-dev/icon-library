import React from 'react';
import propTypes from 'prop-types';

const Network = props => {
	const style = {
		width: `${props.width}`,
	};

	return (
		<svg
			className={`icon-itn network-icon ${props.svgClass}`}
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 60 60"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
		>
			<defs>
				<path id="A" d="M0 0h59.9v60H0z" />
			</defs>
			<path
				d="M53.6 18.8h-8c-1.2-5.3-3.1-9.7-5.7-13 6.1 2.4 10.9 7.1 13.7 13m-11.9 0h-9.9V4.1c4.4 1.3 8.1 7 9.9 14.7M28.1 4.1v14.7h-9.9c1.9-7.7 5.6-13.4 9.9-14.7M20 5.8c-2.5 3.3-4.5 7.7-5.7 13h-8C9.1 12.9 14 8.2 20 5.8M4.9 22.5h8.8c-.3 2.4-.5 4.9-.5 7.5s.2 5.1.5 7.5H4.9c-.7-2.4-1.1-4.9-1.1-7.5 0-2.5.3-5.1 1.1-7.5m1.4 18.7h8c1.2 5.3 3.1 9.7 5.7 13-6-2.5-10.9-7.1-13.7-13m11.9 0h9.9v14.7c-4.3-1.3-8-7-9.9-14.7m9.9-3.7H17.5a45.57 45.57 0 0 1-.6-7.5 45.57 45.57 0 0 1 .6-7.5h10.6v15zm3.8 18.4V41.3h9.9c-1.9 7.6-5.6 13.3-9.9 14.6m0-33.4h10.6a45.57 45.57 0 0 1 .6 7.5 45.57 45.57 0 0 1-.6 7.5H31.9v-15zM40 54.3c2.5-3.3 4.5-7.7 5.7-13h8c-2.9 5.8-7.7 10.5-13.7 13m15.1-16.8h-8.8c.3-2.4.5-4.9.5-7.5s-.2-5.1-.5-7.5h8.8c.7 2.4 1.1 4.9 1.1 7.5s-.4 5.1-1.1 7.5M31.9.1C31.3.1 30.6 0 30 0s-1.2.1-1.9.1C12.4 1.1 0 14.1 0 30s12.4 28.9 28.1 29.9c.6 0 1.2.1 1.9.1.6 0 1.2-.1 1.9-.1C47.5 58.9 60 45.9 60 30S47.5 1.1 31.9.1"
				fill={props.fill}
			/>
		</svg>
	);
};

Network.propTypes = {
	width: propTypes.string,
	ariaHidden: propTypes.string,
	focusable: propTypes.string,
	fill: propTypes.string,
	svgClass: propTypes.string,
};

Network.defaultProps = {
	ariaHidden: 'true',
	focusable: 'false',
	fill: '#30353a',
};

export default Network;
