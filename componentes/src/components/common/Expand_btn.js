import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Expand_btn = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Icon name="chevron-down" size={30} color="#CE712F" />
		</TouchableOpacity>
	);
};

const styles = {
	
	buttonStyle: {
		//flex: 1,
		//alignSelf: 'stretch',
		
		marginLeft: 5,
		marginRight: 5
	}
};

export { Expand_btn };
