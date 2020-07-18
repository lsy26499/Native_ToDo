import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ToDo = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.defaultFontSetting}>To Do</Text>
			<Text style={styles.defaultFontSetting}>To Do</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	defaultFontSetting: {
		fontFamily: '',
	},
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
});

export default ToDo;
