import React, { Component } from 'react';
import { Container, Text, Button, View, Thumbnail } from 'native-base';
import { CommonHeader } from '../../components/CommonHeader';
import { ImageBackground } from "react-native";
import styles from './styles';

class HomeScreen extends Component {

    render() {
        const { navigation } = this.props;
        return (

            <Container>
                <CommonHeader navigation={navigation} title="Home" />
                <ImageBackground source={require('../../../assets/images/home.png')} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}> Dasboard </Text>
                    <Button style={styles.buttonSummary}>
                        <Thumbnail square source={{ uri: 'https://cdn3.iconfinder.com/data/icons/leto-blue-real-estate-1/64/__arrows_home_exchange-512.png' }} />
                        <Text style={styles.textSignup} onPress={() => navigation.navigate('Home')} > Home Page</Text>
                    </Button>
                    <Button style={styles.buttonSummary}>
                        <Thumbnail square source={{ uri: 'https://cdn2.iconfinder.com/data/icons/office-and-business-part-1/121/27-512.png' }} />
                        <Text style={styles.textSignup} onPress={() => navigation.navigate('Contacts')}> Contact List</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

export default HomeScreen;