import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainStackNavigator from './Stack/MainStackNavigator';
import SettingStackNavigator from './Stack/SettingStackNavigator';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				tabBarOptions={{
					labelStyle: {
						fontFamily: '',
						fontSize: 20,
					},
					labelPosition: 'beside-icon',
				}}
			>
				<Tab.Screen name='Main' component={MainStackNavigator} />
				<Tab.Screen name='Setting' component={SettingStackNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
