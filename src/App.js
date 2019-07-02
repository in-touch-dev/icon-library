import React from 'react';
import Icon from './lib/InTouchIcons';

const App = props => {
	return (
		<React.Fragment>
			<Icon
				iconName={'account'}
				fill={'green'}
				width={'50px'}
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
					iconName={'profile'}
					fill={'red'}
					width={'200px'}
					ariaHidden={'true'}
					focusable={'false'}
				/>
			</div>
			<div>
				<Icon
					iconName={'resources'}
					fill={'yellow'}
					width={'200px'}
					ariaHidden={'true'}
					focusable={'false'}
				/>
			</div>
			<div>
				<Icon iconName={'work'} fill={'orange'} width={'200px'} />
			</div>
			<div>
				<Icon iconName={'settings'} fill={'black'} width={'200px'} />
			</div>
		</React.Fragment>
	);
};

export default App;
