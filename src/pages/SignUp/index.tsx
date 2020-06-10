import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
    return(
        <View style={styles.container}>
            <Text>hello basico</Text>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUp;