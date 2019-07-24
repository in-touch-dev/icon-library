import React from 'react';
import Icon from './lib/InTouchIcons';

const App = props => {
	const style = {
		width: '150px',
		margin: '0 auto',
	};
	return (
		<div style={style}>
			<Icon
				iconName={'account'}
				fill={'green'}
				width={'50px'}
				ariaHidden={'true'}
				focusable={'false'}
			/>
			<Icon
				iconName={'message'}
				fill={'blue'}
				width={'200px'}
				ariaHidden={'true'}
				focusable={'false'}
			/>
			<Icon
				iconName={'network'}
				fill={'green'}
				width={'200px'}
				ariaHidden={'true'}
				focusable={'false'}
			/>
			<Icon
				iconName={'profile'}
				fill={'red'}
				width={'200px'}
				ariaHidden={'true'}
				focusable={'false'}
			/>
			<Icon
				iconName={'resources'}
				fill={'yellow'}
				width={'200px'}
				ariaHidden={'true'}
				focusable={'false'}
			/>
			<Icon iconName={'work'} fill={'orange'} width={'200px'} />
			<Icon iconName={'settings'} fill={'black'} width={'200px'} />
			<Icon iconName={'close'} fill={'purple'} width={'200px'} />
			<Icon iconName={'play'} fill={'teal'} width={'200px'} />
			<Icon iconName={'basket'} fill={'grey'} width={'200px'} />
		</div>
	);
};

export default App;
