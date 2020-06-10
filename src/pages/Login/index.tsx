import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const Login = () => {
    return (
        <View style={styles.container}>            
            <Image style={{resizeMode:'contain', height: 530, width:500,left:66, bottom:20}} source={require('../../images/model-and-circle.png')}/>
            <Text style={styles.title}>Ready to train?</Text>

            <RectButton style={styles.signUp}>
                <Text style={styles.signUpText}>Sign up</Text>
            </RectButton>

            <RectButton style={styles.signIn}>
                <Text style={styles.sigInText}>Sign in</Text>
            </RectButton>
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
        position: 'absolute',
        fontFamily: 'Roboto_700Bold',
        fontSize: 36,
        width: 163,
        textAlign: 'center',
        top: 116,
        left: 50
    },
    signUp:{
        width:291,
        height: 68,
        textAlign: 'center',
        backgroundColor:'rgba(196, 196, 196, 0.12)',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto_400Regular'
    },
    signIn:{
        width:291,
        height: 68,
        backgroundColor: '#000',
        borderRadius: 30,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sigInText:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto_400Regular'
    }
});

export default Login;