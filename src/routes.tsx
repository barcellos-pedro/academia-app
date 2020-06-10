import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './pages/Splash';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const AppStack = createStackNavigator();

const Routes = () =>{
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode='none' screenOptions={{cardStyle: {backgroundColor: '#F5F5F5'}}}>
                <AppStack.Screen name='splash' component={Splash}/>
                <AppStack.Screen name='login' component={Login}/>
                <AppStack.Screen name='signUp' component={SignUp}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;