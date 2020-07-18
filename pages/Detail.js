import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Detail = ({ route }) => {
	const {
		params: { id, toDo },
	} = route;

	return (
		<View style={styles.container}>
			<Text style={{ ...styles.defaultFontSetting, ...styles.toDo }}>
				{id}번 : {toDo}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	defaultFontSetting: {
		fontFamily: '',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	toDo: {
		fontSize: 35,
		paddingBottom: 20,
	},
});

export default Detail;
