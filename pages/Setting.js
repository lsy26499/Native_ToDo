import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setIsLogin } from '../actions';

const Setting = ({ isLogin, setIsLogin }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.loginButton}
				onPress={() => {
					isLogin ? setIsLogin(false) : setIsLogin(true);
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

const mapStateToProps = (state) => {
	return {
		isLogin: state.isLoginReducer.isLogin,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setIsLogin: (isLogin) => dispatch(setIsLogin(isLogin)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
