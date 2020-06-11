import React from 'react';
import {AppLoading} from 'expo';
import {StatusBar} from 'react-native';
import {Roboto_700Bold, Roboto_400Regular, Roboto_100Thin, useFonts} from '@expo-google-fonts/roboto';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_100Thin,
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes/> 
    </> 
  );
}