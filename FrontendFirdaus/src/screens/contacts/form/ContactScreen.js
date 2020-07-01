import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Form, Button, Input, Item, Label, Text, Card, Thumbnail } from 'native-base';
import { CommonHeader } from '../../../components/CommonHeader';
import { findById, save } from '../../../actions/contacts';
import styles from './styles';
import { connect } from 'react-redux';
import { showError } from '../../../utils/toast';


class ContactScreen extends Component {

    constructor(props) {
        super(props);

        const { route } = this.props;
        this.state = {
            id: route.params?.id,
            firstName: '',
            lastName: '',
            age: '',
            photo: '',
        };
    }

    componentDidMount() {
        const { id } = this.state;
        if (id) {
            this.props.findById(this.state.id);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { navigation, savedData, saveError, data, error } = this.props;

        if (prevProps.data !== data) {
            this.setState({ ...data });
        } else if (prevProps.savedData !== savedData) {
            navigation.goBack();
        } else if (error && prevProps.error !== error) {
            showError(error);
        } else if (saveError && prevProps.saveError !== saveError) {
            showError(saveError);
        }
    }

    onChange = (name, value) => {
        this.setState({ [name]: value });
    }

    onSubmit = () => {
        this.props.save(this.state);
    }

    render() {
        const { navigation, loading, saveError } = this.props;
        const { id, firstName, lastName, age, photo } = this.state;

        const errorData = saveError?.data;

        return (
            <Container>
                <CommonHeader navigation={navigation} title="Contact" />
                <Content>
                    <Form>
                        {
                            id && <Item flotingLabel>
                                <Label>ID</Label>
                                <Input style={styles.input} disabled value={id.toString()} />
                            </Item>
                        }
                        <View>
                            <View style={{ alignItems: "center", paddingTop: 5 }}>
                                <Thumbnail large source={{ uri: 'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550' }} />
                            </View>
                            <Text style={{ textAlign: 'center' }}> Profile</Text>
                        </View>
                        <View>
                            <Card>
                                <View style={styles.viewDetail}>
                                    <View>
                                        <Item flotingLabel error={errorData?.firstName != null}>
                                            <Label>Firstname : </Label>
                                            <Input style={styles.input} value={firstName} onChangeText={value => this.
                                                onChange('firstName', value)} />
                                        </Item>
                                        {errorData?.firstName && <Text style={styles.error}> {errorData.firstName[0]} </Text>}
                                    </View>
                                    <View>
                                        <Item flotingLabel error={errorData?.lastName != null}>
                                            <Label>LastName : </Label>
                                            <Input style={styles.input} value={lastName} onChangeText={value => this.
                                                onChange('lastName', value)} />
                                        </Item>
                                        {errorData?.lastName && <Text style={styles.error}> {errorData.lastName[0]} </Text>}
                                    </View>
                                    <View>
                                        <Item flotingLabel error={errorData?.age != null}>
                                            <Label>Age : </Label>
                                            <Input style={styles.input} keyboardType="number-pad" value={age.toString()} onChangeText={value => this.
                                                onChange('age', value)} />
                                        </Item>
                                        {errorData?.age && <Text style={styles.error}> {errorData.age[0]} </Text>}
                                    </View>
                                    <View>
                                        <Item flotingLabel error={errorData?.photo != null}>
                                            <Label>Photo : </Label>
                                            <Input style={styles.input} value={photo} onChangeText={value => this.
                                                onChange('photo', value)} />
                                        </Item>
                                        {errorData?.photo && <Text style={styles.error}> {errorData.photo[0]} </Text>}
                                    </View>
                                </View>
                            </Card>
                        </View>
                        <Button style={styles.button} full onPress={this.onSubmit} disabled={loading} >
                            <Text style={styles.textSave}>Save</Text>
                        </Button>
                    </Form>
                </Content>
            </Container >
        );
    }
}

const mapStateToProps = state => ({
    savedData: state.savedContact.data,
    saveError: state.savedContact.error,
    data: state.contactById.data,
    loading: state.contactById.loading || state.savedContact.loading,
    error: state.contactById.error,

});

const mapDispatchToProps = {
    findById, save
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);