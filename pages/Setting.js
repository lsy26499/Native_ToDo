import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Setting = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.defaultFontSetting}>Setting</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	defaultFontSetting: {
		fontFamily: '',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Setting;
