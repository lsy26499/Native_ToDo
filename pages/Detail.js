import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Detail = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.defaultFontSetting}>Detail</Text>
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

export default Detail;
