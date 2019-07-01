import React from 'react';
import propTypes from 'prop-types';

const Account = props => {
	const style = {
		width: `${props.width}`,
	};

	return (
		<svg
			className="account-icon"
			style={style}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 47.3 54.5"
			aria-hidden={props.ariaHidden}
			focusable={props.focusable}
		>
			<path
				d="M16.3 32.7H20v3.6h-3.6v-3.6zm10.9 0h3.6v3.6h-3.6v-3.6z"
				fill={props.fill}
			/>
			<defs>
				<path id="A" d="M0 0h47.3v54.5H0z" />
			</defs>
			<clipPath id="B">
				<use xlinkHref="#A" />
			</clipPath>
			<path
				d="M43.6 33.8a1.79 1.79 0 0 1-1.8 1.8h-3.6v.8c0 8-6.5 14.5-14.5 14.5S9.1 44.4 9.1 36.4v-.8H5.4a1.79 1.79 0 0 1-1.8-1.8v-5.3h7.3c2.9 0 5.5-1.3 7.3-3.6 1.7 2.3 4.4 3.6 7.3 3.6h18.2l-.1 5.3zm0-8.9H25.4c-3 0-5.4-2.4-5.4-5.3h-3.6c0 2.9-2.5 5.3-5.5 5.3H3.6v-1.8c0-10.8 9-19.6 20-19.6s20 8.8 20 19.6v1.8zm3.6 8.9V23.1C47.2 10.4 36.6 0 23.6 0S0 10.4 0 23.1v10.7c0 2.9 2.5 5.3 5.5 5.3h.2c1.3 8.7 8.8 15.4 18 15.4s16.6-6.7 17.9-15.4h.2c3 .1 5.4-2.3 5.4-5.3"
				clip-path="url(#B)"
				fill={props.fill}
			/>
		</svg>
	);
};

// Account

export default Account;
