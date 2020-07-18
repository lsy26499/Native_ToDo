import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ToDo = ({ toDo }) => {
	return (
		<View style={styles.container}>
			<Text style={{ ...styles.defaultFontSetting, ...styles.toDo }}>
				{toDo}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	defaultFontSetting: {
		fontFamily: '',
	},
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	toDo: {
		fontSize: 20,
	},
});

export default ToDo;
