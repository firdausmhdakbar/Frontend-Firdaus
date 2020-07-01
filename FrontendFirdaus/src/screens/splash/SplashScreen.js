import React from 'react';
import { View, ImageBackground} from 'react-native';
import { Content } from 'native-base';


class SplashScreen extends React.Component {
    performTimeConsumingTask = async () => {
        return new Promise(resolve =>
            setTimeout(() => {
                resolve('result');
            }, 4000),
        );
    };

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate("Main");
        }
    }

    render() {
        return (
            <Content>
                <View style={styles.viewStyles}>
                    <ImageBackground
                        source={require('../../../assets/images/splash.png')}
                        style={styles.image}>
                    </ImageBackground>
                </View>
            </Content>
        );
    }
}

const styles = {
    viewStyles: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        height: 120,
        width: 120,
        marginTop: 250,
    }
};

export default SplashScreen;