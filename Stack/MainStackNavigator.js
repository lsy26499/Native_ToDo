import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';
import Detail from '../pages/Detail';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen name='Main' component={Main} />
			<MainStack.Screen name='Detail' component={Detail} />
		</MainStack.Navigator>
	);
};

export default MainStackNavigator;
