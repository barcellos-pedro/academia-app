import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const Introduction = () =>{
  const navigation = useNavigation();

  function handleToLogin(){
    navigation.navigate('login');
  }
    return(
        <View style={styles.container}>
            <Image source={require('../../images/splash-banner.png')}/>
            <Text style={styles.title}>See the results</Text>
            <Text style={styles.subTitle}>Tell us about you and we will deliver a unique schedule for you to follow.</Text>
            <Icon name="arrow-right" color='#000' size={35} style={styles.arrowRight} onPress={handleToLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontFamily: 'Roboto_700Bold',
      fontSize: 36,
      color: '#2E2E2E',
    },
    subTitle:{
      marginTop: 15,
      width: 307,
      textAlign: 'center',
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#5F5F5F',
    },
    arrowRight:{
      marginTop: 35,
      paddingLeft: 260
    }
  }
);
  
export default Introduction;