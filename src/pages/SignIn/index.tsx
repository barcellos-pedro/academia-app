import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleNavigateToHome(){
        navigation.navigate('home');
    }

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../images/left-background-image.png')} style={styles.leftImage}>
                <Icon name="arrow-left" size={35} style={styles.arrowLeft} onPress={handleNavigateBack} />
                <View style={styles.titleDiv}>
                    <Text style={styles.title}>Welcome back</Text>
                </View>
                <View style={styles.rightImageDiv}>
                    <ImageBackground source={require('../../images/right-background-image.png')} style={styles.rightImage}/>
                </View>
            </ImageBackground>
            
            <View style={styles.form}>
                <TextInput style={styles.emailInput} autoCorrect={false} placeholder='E-mail'></TextInput>
                <TextInput style={styles.passwordInput} placeholder='Password'></TextInput>
                
            </View>

            <View style={styles.logInDiv}>
                <Text style={styles.startTraining}>Start Training</Text>
                <RectButton onPress={handleNavigateToHome}>
                    <Icon name="log-in" size={35}/>
                </RectButton>
            </View>

            <View style={{alignItems:'center'}}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leftImage:{
        width: 371,
        height: 406
    },
    arrowLeft:{
        marginTop: 75,
        marginLeft: 35
    },
    rightImageDiv:{
        marginTop: 50,
        alignItems: 'flex-end'
    },
    rightImage:{
        width: 110,
        height: 260,
        left: 25
    },
    titleDiv:{
        alignItems: 'center'
    },
    title:{
        fontFamily: 'Roboto_700Bold',
        fontSize: 36,
        width: 160,
        textAlign: 'center',
    },
    form:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    emailInput:{
        paddingTop: 5,
        fontSize: 20,
        fontFamily: 'Roboto_100Thin',
        height: 45,
        width: 270,
        borderBottomColor: '#000',
        borderStyle: "solid",
        borderBottomWidth: 1,
    },
    passwordInput:{
        paddingTop: 5,
        fontSize: 20,
        fontFamily: 'Roboto_100Thin',
        height: 45,
        width: 270,
        borderBottomColor: '#000',
        borderStyle: "solid",
        borderBottomWidth: 1,
    },
    logInDiv:{
        flexDirection: 'row',
        marginTop: 31,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startTraining:{
        color: '#151515',
        fontFamily: 'Roboto_300Light',
        fontSize: 24,
        marginRight: 15
    },
    forgotPassword:{
        marginTop: 31,
        width: 147,
        fontFamily: 'Roboto_300Light',
        fontSize: 18,
        textAlign: 'center',
        color: '#151515',
        borderBottomColor: '#000',
        borderStyle: "solid",
        borderBottomWidth: 1,
    }
});

export default SignIn;