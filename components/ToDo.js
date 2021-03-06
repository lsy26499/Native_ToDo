import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ToDo = ({ toDo, deleteToDo, idx, navigation }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => {
				navigation.navigate('Detail', {
					toDo,
					id: idx,
				});
			}}
		>
			<Text style={{ ...styles.defaultFontSetting, ...styles.toDo }}>
				{toDo}
			</Text>
			<TouchableOpacity
				style={styles.delete}
				onPress={() => deleteToDo(idx)}
			>
				<Text style={styles.defaultFontSetting}>DEL</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	defaultFontSetting: {
		fontFamily: '',
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	toDo: {
		fontSize: 20,
		paddingBottom: 10,
		paddingRight: 10,
	},
	delete: {
		justifyContent: 'center',
		backgroundColor: '#dfe4ea',
		paddingBottom: 3,
		paddingHorizontal: 4,
		borderRadius: 3,
	},
});

export default ToDo;
