import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-facebook';

const Setting = () => {
    const [isLogin, setIsLogin] = useState(false);

    const logIn = async () => {
        try {
            await Facebook.initializeAsync('738535016940375');
            const data = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });

            if (data.type === 'success') {
                // Get the user's name using Facebook's Graph API
                console.log(data);
                // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                    logIn();
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
