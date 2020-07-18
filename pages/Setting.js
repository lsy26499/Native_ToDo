import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Setting = () => {
	const [isLogin, setIsLogin] = useState(false);

	const storeData = async () => {
		try {
			setIsLogin((prevState) => !prevState);
			await AsyncStorage.setItem('isLogin', JSON.stringify(isLogin));
		} catch (error) {
			console.log(error);
		}
	};

	const getData = async () => {
		const data = await AsyncStorage.getItem('isLogin');
		setIsLogin(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.loginButton}
				onPress={() => {
					storeData();
				}}
			>
				<Text style={styles.defaultFontSetting}>
					{isLogin ? '로그아웃' : '로그인'}
				</Text>
			</TouchableOpacity>
			<Text style={styles.defaultFontSetting}>
				{isLogin ? '로그인중입니다' : '로그아웃되었습니다'}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	defaultFontSetting: {
		fontFamily: '',
		fontSize: 30,
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginButton: {
		paddingBottom: 20,
	},
});

export default Setting;
