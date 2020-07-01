import React, { Component } from 'react';
import {
    Container,
    Button,
    Fab,
    View,
    Text,
    Body,
    Right,
    Icon,
    ListItem,
    Left,
    Thumbnail,
    Input,
    Item,
    Card
} from 'native-base';
import { CommonHeader } from '../../../components/CommonHeader';
import { RefreshControl } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { findAll, deleteById } from '../../../actions/contacts';
import { Alert } from "react-native";
import { showError } from '../../../utils/toast';
import { SwipeListView } from 'react-native-swipe-list-view';

function RowItem({ onPress, contact }) {
    return (
        <Card style={{ width: 375, borderRadius: 25 }}>
            <ListItem style={styles.item} onPress={() => onPress(contact)}>
                <Left><Button style={styles.iconHome}>
                    <Thumbnail square source={{ uri: "https://cdn0.iconfinder.com/data/icons/flat-design-business-set-3/24/people-employee-512.png" }} />
                    {/* <Thumbnail square source={{ uri: contact.photo }} /> */}
                </Button>
                </Left>
                <Body>
                    <Text>{contact.firstName}</Text>
                    <Text>{contact.lastName}</Text>
                    <Text>{contact.age}</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        </Card>
    );
}

class ContactsScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            total: 0,
            search: '',
            params: {
                search: '',
                sort: 'asc',
                page: 0
            }
        };
    }

    componentDidMount() {
        this.reload(this.state.params);
    }

    componentDidUpdate(prevProps, prevState) {
        const { deletedData, deleteError, savedData, data, error } = this.props;

        if (prevProps.data !== data) {
            this.setState({
                data: data,
                search: this.state.params.search,
                params: {
                    ...this.state.params,
                    page: data.page
                }
            });

        } else if (prevProps.deletedData !== deletedData ||
            prevProps.savedData !== savedData) {
            this.onRefresh();
        } else if (error && prevProps.error !== error) {
            showError(error);
        } else if (deleteError && prevProps.deleteError !== deleteError) {
            showError(deleteError);
        }
    }

    reload({ search, sort = 'asc', page = 0 } = {}) {
        this.props.findAll({ search: { name: search }, sort, page });
    }

    onRefresh = () => {
        const { params } = this.state;
        this.setState(
            {
                data: [],
                total: 0,
                params: { ...params, page: 0 }
            },
            () => this.reload(this.state.params)
        );
    }

    onAdd = () => {
        this.props.navigation.navigate('Item')
    }

    onShowForm = (contact) => {
        this.props.navigation.navigate('Contact', contact ? { id: contact.id } : null);
    }

    onDelete = (contact) => {
        Alert.alert(
            "Confirmation",
            "Are you sure to Delete ?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => this.props.deleteById(contact.id) }
            ]
        );
    }

    onSearch = () => {
        const { search, params } = this.state;
        this.setState(
            {
                data: [],
                total: 0,
                params: { ...params, search: search, page: 0 }
            },
            () => this.reload(this.state.params)
        );
    }

    onEndReached = () => {
        const { data, total, params } = this.state;
        if (data.length < total) {
            this.reload({
                ...params,
                page: params.page + 1
            });
        }
    }

    render() {
        const { navigation, loading } = this.props;
        const { data } = this.state;

        return (
            <Container>
                <CommonHeader navigation={navigation} title={"Contacts"} />
                <View style={styles.content}>
                    <SwipeListView
                        refreshControl={
                            <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
                        }
                        data={data}
                        renderItem={({ item: contact }) => <RowItem onPress={this.onShowForm} contact={contact} />}
                        renderHiddenItem={data => (
                            <View style={styles.hiddenItem}>
                                <Button style={styles.deleteButton} onPress={() => this.onDelete(data.item)}>
                                    <Icon type="FontAwesome" name="trash" />
                                </Button>
                            </View>
                        )}
                        rightOpenValue={-75}
                        keyExtractor={contact => contact.id.toString()}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={0.5}
                    />
                    <Fab style={{ backgroundColor: "#6200EA" }} onPress={this.onShowForm}>
                        <Icon name="add" />
                    </Fab>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    deletedData: state.deletedContactById.data,
    deleteError: state.deletedContactById.error,
    savedData: state.savedContact.data,
    data: state.contacts.data,
    loading: state.contacts.loading || state.deletedContactById.loading,
    error: state.contacts.error
});

const mapDispatchToProps = {
    findAll, deleteById
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen)