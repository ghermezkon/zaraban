import React from 'react';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';
import globalStyle from '../../styles/global';
import constant from '../../api/constant'
import { Container, View, Header, Text, Right, Icon, Title, Left, StyleProvider, Content, Form, Item, Input, Label, Button, } from 'native-base';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ModalSpinner from '../../api/modal.spinner';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/svg/selection.json';
const IconMoon = createIconSetFromIcoMoon(fontelloConfig);

//-------------------------------------------------
export default class Ostan extends React.Component {
    //---------------------------------------------    
    constructor(props) {
        super(props);
        this.state = {
            ostan_code: '',
            ostan_name: '',
            ostans: [],
            isLoading: true,
        }
    }
    componentDidMount() {
        this.getAll();
    }
    //---------------------------------------------
    getAll = () => {
        fetch('http://82.102.10.253:5001/api/zaraban_init/ostan').then((res) => res.json()).then((resJSON) => {
            this.setState({ ostans: resJSON, isLoading: false })
        })
    }
    save = () => {
        fetch('http://82.102.10.253:5001/api/zaraban_init/', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ostan_code: this.state.ostan_code,
                ostan_name: this.state.ostan_name
            })
        }).then((res) => res.json()).then((resJSON) => {
            this.setState({ ostans: [...this.state.ostans, resJSON.ops[0]] })
        })
    }
    renderHeader() {
        return (
            <Container>
                <Header searchBar rounded style={{elevation: 0, backgroundColor: '#F8F8F8', marginLeft:13, marginRight:13}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                </Container>
        )
    }
    //---------------------------------------------
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container >
                    <View style={globalStyle.globalStatusBar}></View>
                    <Header style={{ direction: 'rtl' }}>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Icon name="arrow-back" style={styles.backButton}></Icon>
                            </TouchableOpacity>
                        </Left>
                        <Right>
                            <Title>تعریف استان</Title>
                        </Right>
                    </Header>
                    <Content>

                        <ModalSpinner isLoading={this.state.isLoading} />

                        <Form style={globalStyle.formRTL}>
                            <Item floatingLabel style={[globalStyle.itemRTL, styles.inputNumber]}>
                                <Icon type="SimpleLineIcons" name='home' style={globalStyle.inputIcon} />
                                <Label>کد استان</Label>
                                <Input keyboardType="numeric" style={globalStyle.inputNumber} onChangeText={(value) => this.setState({ ostan_code: value })} />
                            </Item>
                            <Item floatingLabel style={[globalStyle.itemRTL, styles.inputText]}>
                                <Icon type="SimpleLineIcons" name='doc' style={globalStyle.inputIcon} />
                                <Label>نام استان</Label>
                                <Input style={globalStyle.inputText} onChangeText={(value) => this.setState({ ostan_name: value })} />
                            </Item>
                        </Form>
                        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <Button iconRight block style={styles.button} onPress={this.save}>
                                <Text>{constant.SAVE_BUTTON_TEXT}</Text>
                                <Icon type="MaterialIcons" name='save' />
                            </Button>
                        </View>
                        <FlatList itemDivider style={{ paddingLeft: 8, paddingRight: 8 }}
                            data={this.state.ostans}
                            keyExtractor={item => item.ostan_code}
                            ListHeaderComponent={this.renderHeader}
                            renderItem={
                                ({ item }) =>
                                    <TouchableOpacity>
                                        <View style={{
                                            elevation: 1,
                                            borderRadius: 2,
                                            backgroundColor: '#F8F8F8',
                                            flex: 1,
                                            flexDirection: 'row-reverse',  // main axis
                                            justifyContent: 'flex-start', // main axis
                                            alignItems: 'center', // cross axis
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            paddingLeft: 9,
                                            paddingRight: 16,
                                            marginLeft: 14,
                                            marginRight: 14,
                                            marginTop: 0,
                                            marginBottom: 6,
                                        }}>
                                            <View style={styles.ostanCodeIcon}>
                                                <IconMoon name="map-marker-alt" size={25}></IconMoon>
                                            </View>
                                            <View style={styles.ostanCodeStyle}>
                                                <Text>{item.ostan_code}</Text>
                                            </View>
                                            <View style={styles.ostanNameStyle}>
                                                <Text>{item.ostan_name}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                            }
                        />

                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}
//-------------------------------------------------------------------------
const styles = StyleSheet.create({
    backButton: {
        color: '#fff',
    },
    inputNumber: {
        width: '40%'
    },
    inputText: {
        width: '90%'
    },
    button: {
        width: '100%',
        alignSelf: "center", marginTop: 10
    },
    ostanCodeIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        borderLeftWidth: 1,
        borderColor: '#ECECEC',
    },
    ostanCodeStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
    },
    ostanNameStyle: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
    }
})