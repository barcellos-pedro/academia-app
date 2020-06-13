import React from 'react';
import { StyleSheet, ImageBackground, Text, View, SafeAreaView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }


    return(
        <SafeAreaView style={styles.container}>
            <Icon name="arrow-left" size={35} style={styles.arrowLeft} onPress={handleNavigateBack} />

            <ScrollView contentContainerStyle={styles.exercisesContainer} horizontal showsHorizontalScrollIndicator={false}>
                <TouchableWithoutFeedback>
                    <View style={styles.exerciseItem}>
                        <Text style={styles.exerciseLevel}>Beginner</Text>
                        <Text style={styles.exerciseName}>Body Sculpt</Text>
                        <ImageBackground style={styles.exerciseImage1} source={require('../../images/stretch-model.png')}/>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <View style={[styles.exerciseItem, {backgroundColor: '#C6E5FC'}]}>
                        <Text style={styles.exerciseLevel}>Beginner</Text>
                        <Text style={styles.exerciseName}>Double Wave</Text>
                        <ImageBackground style={styles.exerciseImage2} source={require('../../images/rope-model.png')}/>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
            
            <View style={styles.menu}>
                <View style={{alignItems: 'center'}}>
                    <ImageBackground  style={styles.halterButton} source={require('../../images/halter-button.png')}/>
                    <ImageBackground style={styles.menuLine} source={require('../../images/menu-bar.png')}/>

                    <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Icon name="home" size={25} style={{marginLeft:10, marginRight: 25, bottom: 13}}/>
                            <Text style={{marginRight:17, bottom:10}}>Home</Text>
                        </View>
                        <View style={{alignItems:'center', marginHorizontal: 5}}>
                            <Icon name="search" size={25} style={{marginLeft:0, marginRight: 80, bottom: 12}}/>
                            <Text style={{marginRight:75, bottom:9}}>Search</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Icon name="list" size={25} style={{marginLeft:65, marginRight: 0, bottom: 10}}/>
                            <Text style={{bottom: 8, left:30}}>Plan</Text>
                        </View>
                        <View style={{alignItems:'center', marginHorizontal: 5}}>
                            <Icon name="user" size={25} style={{marginLeft:30, marginRight:10, bottom: 10}}/>
                            <Text style={{bottom: 5, left: 10}}>Profile</Text>
                        </View>
                    </View>
                    
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    arrowLeft:{
        marginTop: 75,
        marginLeft: 35
    },
    exercisesContainer:{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 520,
    },
    exerciseItem:{
        height: 519,
        width: 293,
        borderRadius: 45,
        backgroundColor: '#FFF1E0',
        marginHorizontal: 50,
    },
    exerciseLevel:{
        marginTop:40,
        marginLeft: 33,
        fontSize: 18,
        fontFamily: 'Roboto_300Light'
    },
    exerciseName:{
        marginTop: 14,
        marginLeft: 33,
        width: 114,
        fontSize: 36,
        fontFamily: 'Roboto_700Bold'
    },
    exerciseImage1:{
        width: 293,
        height: 338
    },
    exerciseImage2:{
        width: 350,
        height: 550,
        bottom: 100
    },
    menu:{

    },
    menuLine:{
        width: 393,
        height: 63,
        top: 40
    },
    halterButton:{
        width: 90,
        height: 90,
        position: 'absolute',
        bottom: 15,
        backgroundColor: '#E5E5E5',
        borderRadius: 50
    },
});

export default Home;