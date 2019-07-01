import React from 'react';
import Icon from './components/icons/InTouchIcons';

const App = props => {
	return (
		<React.Fragment>
			<Icon
				iconName={'account'}
				fill={'green'}
				width={'200px'}
				ariaHidden={'true'}
				focusable={'false'}
			/>
			<div>
				<Icon
					iconName={'message'}
					fill={'blue'}
					width={'200px'}
					ariaHidden={'true'}
					focusable={'false'}
				/>
			</div>
			<div>
				<Icon
					iconName={'network'}
					fill={'green'}
					width={'200px'}
					ariaHidden={'true'}
					focusable={'false'}
				/>
			</div>
			<div>
				<Icon
					iconName={'message'}
					fill={'green'}
					width={'200px'}
					ariaHidden={'true'}
					focusable={'false'}
				/>
			</div>
			<div>
				<Icon
					iconName={'message'}
					fill={'green'}
					width={'200px'}
					ariaHidden={'true'}
					focusable={'false'}
				/>
			</div>
			<div>
				<Icon iconName={'message'} />
			</div>
		</React.Fragment>
	);
};

export default App;
