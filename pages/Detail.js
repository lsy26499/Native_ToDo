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
			<TouchableOpacity style={styles.delete}>
				<Text
					style={{
						...styles.defaultFontSetting,
						...styles.deleteText,
					}}
				>
					DEL
				</Text>
			</TouchableOpacity>
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
	delete: {
		justifyContent: 'center',
		backgroundColor: '#dfe4ea',
		paddingBottom: 3,
		paddingHorizontal: 4,
		borderRadius: 3,
	},
	deleteText: {
		fontSize: 23,
		fontWeight: 'bold',
	},
});

export default Detail;
