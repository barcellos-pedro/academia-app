import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, SafeAreaView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleNavigateToLogin() {
        navigation.navigate('login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Icon name="arrow-left" size={35} style={styles.arrowLeft} onPress={handleNavigateBack} />

            <View style={styles.signUp}>
                <Text style={styles.title}>Sign up</Text>

                <View style={styles.form}>
                    <TextInput style={styles.inputName} autoCorrect={false} placeholder='Name'></TextInput>
                    <TextInput style={styles.inputEmail} autoCorrect={false} placeholder='E-mail'></TextInput>
                    <TextInput style={styles.inputPassword} placeholder='Password'></TextInput>
                </View>
            </View>

            <Image style={styles.image} source={require('../../images/nike-sneakers.png')} />
            <Text style={styles.terms}>
                Creating an account means you're okay with our
                <Text style={styles.span}> Terms of Service, Privacy Policy </Text>
                 and our default
                <Text style={styles.span}> Notification Settings.</Text>
            </Text>

            <View style={styles.footer}>
                <View style={styles.callToAction}>
                    <Text style={styles.callToActionText}>Let's shape</Text>
                    <Text style={styles.callToActionSubText}>a new body, together</Text>
                </View>
                <BorderlessButton onPress={handleNavigateToLogin}>
                    <Image style={styles.buttonGo} source={require('../../images/buttonGo.png')} />
                </BorderlessButton>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowLeft: {
        right: 145,
        bottom: 50
    },
    title: {
        fontFamily: 'Roboto_400Regular',
        fontWeight: '500',
        fontSize: 50
    },
    signUp: {
        alignItems: 'flex-start',
        bottom: 30,
        right: 5,
    },
    inputName: {
        paddingTop: 5,
        fontSize: 20,
        fontFamily: 'Roboto_100Thin',
        height: 45,
        width: 270,
        borderBottomColor: '#000',
        borderStyle: "solid",
        borderBottomWidth: 1,
    },
    inputEmail: {
        paddingTop: 15,
        fontSize: 20,
        fontFamily: 'Roboto_100Thin',
        height: 45,
        width: 270,
        borderBottomColor: '#000',
        borderStyle: "solid",
        borderBottomWidth: 1,
    },
    inputPassword: {
        paddingTop: 15,
        fontSize: 20,
        fontFamily: 'Roboto_100Thin',
        height: 45,
        width: 270,
        borderBottomColor: '#000',
        borderStyle: "solid",
        borderBottomWidth: 1,
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 340,
        height: 239,
        left: 27
    },
    terms: {
        top: 35,
        width: 344,
        textAlign: 'center',
        fontSize: 15
    },
    span:{
        color: '#0010A3',
        fontFamily: 'Roboto_700Bold'
    },
    callToAction: {
        top: 35
    },
    callToActionText:{
        fontFamily: 'Roboto_700Bold',
        fontSize: 36
    },
    callToActionSubText: {
        fontSize: 24,
        fontFamily: 'Roboto_100Thin'
    },
    buttonGo: {
        height: 85,
        width: 85,
        left: 15,
        top: 35
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30
    }
});

export default SignUp;