import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

const Setting = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        initAsync();
    }, []);

    const initAsync = async () => {
        await GoogleSignIn.initAsync({
            clientId:
                '652299888580-s33d4gmd23bhufq90ftcgiu9icjpump3.apps.googleusercontent.com',
        });
        _syncUserWithStateAsync();
    };

    const _syncUserWithStateAsync = async () => {
        const user = await GoogleSignIn.signInSilentlyAsync();
        setUser(user);
    };

    const signOutAsync = async () => {
        await GoogleSignIn.signOutAsync();
        setUser(null);
    };

    const signInAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            if (type === 'success') {
                _syncUserWithStateAsync();
            }
        } catch ({ message }) {
            console.log(message);
            alert('login: Error:' + message);
        }
    };

    const onPress = () => {
        if (user) {
            signOutAsync();
        } else {
            signInAsync();
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} onPress={onPress}>
                <Text style={styles.defaultFontSetting}>구글 로그인</Text>
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
