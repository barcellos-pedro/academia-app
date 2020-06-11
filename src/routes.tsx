import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Introduction from './pages/Introduction';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const AppStack = createStackNavigator();

const Routes = () =>{
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode='none' screenOptions={{cardStyle: {backgroundColor: '#F5F5F5'}}}>
                <AppStack.Screen name='introduction' component={Introduction}/>
                <AppStack.Screen name='login' component={Login}/>
                <AppStack.Screen name='signUp' component={SignUp}/>
                <AppStack.Screen name='signIn' component={SignIn}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;