import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from '../pages/Setting';

const SettingStack = createStackNavigator();

const SettingStackNavigator = () => {
	return (
		<SettingStack.Navigator>
			<SettingStack.Screen name='Setting' component={Setting} />
		</SettingStack.Navigator>
	);
};

export default SettingStackNavigator;
