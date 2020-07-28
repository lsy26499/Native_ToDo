import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as Google from 'expo-google-app-auth';

// keytool -keystore path-to-debug-or-production-keystore -list -v

const ANDROID_CLIENT_ID =
    '821076642959-0n9jc44sgvhq0qccpsnmqtp01jdf20jl.apps.googleusercontent.com';

const IOS_CLIENT_ID =
    '821076642959-4ah3a9tbn1n5ri7j7sgrkrrhb35sjatq.apps.googleusercontent.com';

const Setting = () => {
    const [isLogin, setIsLogin] = useState(false);

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };

    useEffect(() => {
        checkToken();
    }, []);

    const setToken = async (accessToken, refreshToken) => {
        try {
            await AsyncStorage.setItem('accessToken', accessToken);
            await AsyncStorage.setItem('refreshToken', refreshToken);
        } catch (e) {
            // saving error
            console.log(e);
        }
    };

    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                iosClientId: IOS_CLIENT_ID,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                const { accessToken, refreshToken } = result;
                setToken(accessToken, refreshToken);
                // 서버로 액세스 토큰을 보내 리소스 서버의 토큰을 받아와서 asyncStorage에 저장합니다
                checkToken();
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={signInWithGoogleAsync}
            >
                <Text style={styles.defaultFontSetting}>
                    구글 계정으로 로그인
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
