import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';

import MainStackNavigator from './Stack/MainStackNavigator';
import SettingStackNavigator from './Stack/SettingStackNavigator';

const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
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
						<Tab.Screen
							name='Main'
							component={MainStackNavigator}
						/>
						<Tab.Screen
							name='Setting'
							component={SettingStackNavigator}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;
