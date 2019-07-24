import IconObj from './IconObj';

const Icon = props => {
	const iconName = props.iconName,
		Icon = IconObj[iconName];

	if (Icon) {
		return Icon;
	} else {
		return console.log('Check the iconName prop is correct');
	}
};

export default Icon;
