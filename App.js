import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button } from 'react-native';

import Main from './pages/Main';
import Setting from './pages/Setting';

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
				<Tab.Screen name='Main' component={Main} />
				<Tab.Screen name='Setting' component={Setting} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
