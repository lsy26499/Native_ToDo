import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/index';
import MainStackNavigator from './Stack/MainStackNavigator';
import SettingStackNavigator from './Stack/SettingStackNavigator';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
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
					<Tab.Screen
						name='Setting'
						component={SettingStackNavigator}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
