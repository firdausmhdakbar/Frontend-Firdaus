import React, { Component } from 'react';
import { Container, Content, Text, Icon, Left, Body, ListItem, Button } from 'native-base';
import { ImageBackground } from "react-native";
import styles from './styles';

const items = [
    {
        icon: 'home',
        label: 'Home',
        target: 'Home'
    },
    {
        icon: 'sitemap',
        label: 'Contacts',
        target: 'Contacts'
    }
];

function DrawerItem({ navigation, item }) {
    return (
        <ListItem icon onPress={() => navigation.navigate(item.target)}>
            <Left>
                <Button style={{ backgroundColor: "#6200EA" }} >
                    <Icon type="FontAwesome" name={item.icon} />
                </Button>
            </Left>
            <Body>
                <Text> {item.label} </Text>
            </Body>
        </ListItem>
    );
}

class CommonDrawer extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <ImageBackground source={require('../../../assets/images/drawer.png')} style={styles.image}>
                        <Text style={styles.text}>Contact Apps</Text>
                    </ImageBackground>
                    {items.map((item, index) =>
                        <DrawerItem
                            key={index}
                            navigation={navigation}
                            item={item} />
                    )}
                </Content>
            </Container>
        );
    }
}

export default CommonDrawer;
