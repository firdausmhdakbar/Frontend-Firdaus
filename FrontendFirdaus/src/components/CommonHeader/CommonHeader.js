import React, { Component } from 'react';
import { Header, Button, Icon, Left, Title, Body } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';

class CommonHeader extends Component {

    onMenuPress = () => {
        this.props.navigation.openDrawer();
    }

    onBackPress = () => {
        this.props.navigation.goBack();
    }


    render() {
        const { navigation, hideLeftButton, title } = this.props;

        return (
            <Header style={styles.header}>
                {
                    !hideLeftButton && <Left>
                        {
                            typeof navigation.openDrawer === 'function' ?
                                <Button transparent onPress={this.onMenuPress}>
                                    <Icon name='menu' />
                                </Button> :
                                <Button transparent style={{ backgroundColor: "#6200ea" }} onPress={this.onBackPress}>
                                    <Icon name='ios-arrow-back' />
                                </Button>
                        }
                    </Left>
                }
                <Body>
                    <Title>{title}</Title>
                </Body>
            </Header>
        );
    }
}

CommonHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    hideLeftButton: PropTypes.bool,
    title: PropTypes.string
};

export default CommonHeader;
