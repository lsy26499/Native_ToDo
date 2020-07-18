import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import ToDo from '../components/ToDo';

const Main = () => {
	const [toDos, setToDos] = useState([]);
	const [value, setValue] = useState('');

	const deleteToDo = (idx) => {
		setToDos((prevState) => [
			...prevState.slice(0, idx),
			...prevState.slice(idx + 1),
		]);
	};

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Text style={{ ...styles.defaultFontSetting, ...styles.label }}>
					Write To Do
				</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setValue(text)}
					value={value}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						setToDos((prevState) => [...prevState, value]);
						setValue('');
					}}
				>
					<Text style={styles.defaultFontSetting}>ADD</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.toDo}>
				{toDos.map((toDo, idx) => (
					<ToDo
						toDo={toDo}
						key={idx}
						deleteToDo={deleteToDo}
						idx={idx}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	defaultFontSetting: {
		fontFamily: '',
	},
	label: {
		fontSize: 30,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 50,
	},
	form: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 50,
	},
	input: {
		height: 30,
		width: 200,
		borderColor: '#dfe4ea',
		borderWidth: 2,
		borderRadius: 3,
		padding: 5,
		margin: 10,
	},
	button: {
		width: 40,
		backgroundColor: '#dfe4ea',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
		borderRadius: 5,
	},
	toDo: {
		flex: 1,
	},
});

export default Main;
