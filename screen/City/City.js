import React from 'react';

import { Container, View, Text, Icon, StyleProvider, Content, Label, Button, Card, CardItem, Item, Input } from 'native-base';
import { StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native';

import {
    MaterialInput, MaterialToast, getTheme, platform, IconMoon, 
    MaterialListHeader, constant, httpApi, ModalSpinner, validator, theme, globalStyle
} from '../../index';
import OstanModal from '../Modal/OstanModal'
import _ from 'lodash';
//-------------------------------------------------
export default class City extends React.Component {
    //---------------------------------------------    
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            city_code: '',
            city_name: '',
            ostan: {},

            dataList: [],
            ostanList: [],

            openOstanModal: false,
            isLoading: false,

            city_code_error: null,
            city_name_error: null,
            ostan_error: null,
            row_index: -1,
            full_list: ''
        }
    }
    //---------------------------------------------
    getCityOfOstan = async (value) => {
        let parameter = '';
        if (value.length == 0) parameter = this.state.ostan.ostan_name;
        else parameter = value.ostan_name;

        this.setState({ isLoading: true })
        let res = await fetch(httpApi.get_city_of_ostan + parameter);
        resJSON = await res.json();
        
        this.setState({ dataList: [...resJSON], isLoading: false })
    }
    //---------------------------------------------
    ostanChange = async (value) => {
        if (value.ostan_name != this.state.ostan.ostan_name) {
            this.getCityOfOstan(value);
            this.setState({
                openOstanModal: false,
                ostan: value,
            })
        } else {
            this.setState({ isLoading: false, openOstanModal: false });
        }
    }
    //---------------------------------------------
    ostanClick = () => {
        this.setState({ openOstanModal: true });
    }
    //---------------------------------------------
    componentDidMount() {
        if (this.state.ostanList.length == 0) {
            this.setState({ isLoading: true })
            fetch(httpApi.get_all_ostan).then(res => res.json()).then(resJSON => {
                this.setState({ ostanList: resJSON, isLoading: false })
            })
        }
    }
    //---------------------------------------------
    save = () => {
        if (this.state.row_index != -1) {
            this.edit();
        }
        else {
            if (this.state.city_code == '' || this.state.city_name == '') {
                MaterialToast(constant.FORM_INVALID, 'danger')
            } else {
                let find_index = this.state.dataList.findIndex(el =>
                    (el.ostan.ostan_name == this.state.ostan.ostan_name && el.city_code == this.state.city_code) ||
                    (el.ostan.ostan_name == this.state.ostan.ostan_name && el.city_name == this.state.city_name));
                if (find_index != -1) {
                    MaterialToast(constant.DOUBLE_RECORD, 'warning');
                } else {
                    this.setState({ isLoading: true });
                    fetch(httpApi.save, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            city_code: this.state.city_code,
                            city_name: this.state.city_name,
                            ostan: this.state.ostan
                        })
                    }).then((res) => res.json()).then((resJSON) => {
                        this.setState({ dataList: [...this.state.dataList, resJSON] }, function () { this.resetForm() });
                        MaterialToast(constant.SAVE_OK_MSG, 'success')
                    })
                }
            }
        }
    }
    //---------------------------------------------
    selectRow = (item, index) => (e) => {
        this.setState({
            _id: item._id,
            city_code: item.city_code,
            city_name: item.city_name,
            ostan: item.ostan,
            row_index: index
        })
    }
    //---------------------------------------------
    edit = async () => {
        let temp_list = [];
        if (this.state.dataList.length > 0)
            temp_list = [...this.state.dataList];
        else {
            const ostan = { _id: '', city_name: '', city_code: '', ostan: '' }
            temp_list = [...ostan];
        }

        let find_index = this.state.dataList.findIndex(el =>
            el.ostan_code == this.state.ostan_code || el.ostan_name == this.state.ostan_name);
        if (find_index != -1 && find_index != this.state.row_index) {
            MaterialToast(constant.DOUBLE_RECORD, 'warning');
        } else {
            this.setState({ isLoading: true });
            fetch(httpApi.save, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: this.state._id,
                    city_code: this.state.city_code,
                    city_name: this.state.city_name,
                    ostan: this.state.ostan
                })
            }).then((res) => res.json()).then(() => {
                if (this.state.dataList.length > 0) {
                    temp_list[this.state.row_index]._id = this.state._id;
                    temp_list[this.state.row_index].city_code = this.state.city_code;
                    temp_list[this.state.row_index].city_name = this.state.city_name;
                    temp_list[this.state.row_index].ostan = this.state.ostan;
                    this.setState({ dataList: [...temp_list] });
                } else {
                    this.getCityOfOstan('');
                }
                this.resetForm();
                MaterialToast(constant.UPDATE_OK_MSG, 'success')
            })
        }
    }
    //---------------------------------------------
    resetForm = () => {
        this.setState({
            city_code: '',
            city_name: '',
            city_code_error: null,
            city_name_error: null,
            isLoading: false,
            row_index: -1
        })
    }
    //---------------------------------------------
    filterList(value) {
        if (!_.isEmpty(_.toString(value))) {
            this.setState({ full_list: this.state.dataList });
            if (!_.isEmpty(_.toString(value))) {
                data = _.filter(this.state.dataList, o => _.includes(o.city_name, value))
                this.setState({ dataList: data, isLoading: false })
            } else {
                this.setState({ dataList: this.state.full_list });
            }
        }
    }
    //---------------------------------------------
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container style={{ backgroundColor: theme.CONTAINER_COLOR }}>
                    {this.state.openOstanModal ?
                        <OstanModal
                            ostanList={this.state.ostanList}
                            ostanSelect={this.state.ostan}
                            openOstanModal={this.state.openOstanModal}
                            ostanChange={this.ostanChange} /> : null}
                    {this.state.isLoading ?
                        <ModalSpinner isLoading={this.state.isLoading} /> : null}
                    <Content padder>
                        <Card>
                            <CardItem bordered style={globalStyle.formRTL}>
                                <MaterialInput showButton={true} disabled={true}
                                    value={this.state.ostan.ostan_name}
                                    buttonPress={this.ostanClick}
                                    placeholder='-- انتخاب استان --'
                                    label='نام استان:' iconName="map-marker-alt" textAlign="center" />

                                <MaterialInput value={this.state.city_code}
                                    label='کد شهر:' keyboardType="numeric"
                                    iconName="number" textAlign="center"
                                    onChangeText={(value) => this.setState({ city_code: value })}
                                    onEndEditing={() => {
                                        this.setState({
                                            city_code_error: validator('city_code', this.state.city_code)
                                        })
                                    }}
                                    error={this.state.city_code_error} />
                                <Label style={globalStyle.error}>{this.state.city_code_error}</Label>

                                <MaterialInput value={this.state.city_name}
                                    label='نام شهر:' iconName="document" textAlign="right"
                                    onChangeText={(value) => this.setState({ city_name: value })}
                                    onEndEditing={() => {
                                        this.setState({
                                            city_name_error: validator('city_name', this.state.city_name)
                                        })
                                    }}
                                    error={this.state.city_name_error} />
                                <Label style={globalStyle.error}>{this.state.city_name_error}</Label>

                                <Button iconRight block style={styles.button} onPress={this.save}>
                                    <Text>{constant.SAVE_BUTTON_TEXT}</Text>
                                    <Icon type="MaterialIcons" name='save' />
                                </Button>
                            </CardItem>
                            <CardItem bordered>
                                {this.state.dataList.length > 0 ?
                                    <FlatList itemDivider data={this.state.dataList} keyExtractor={item => item.city_code}
                                        ListHeaderComponent={
                                            <MaterialListHeader icon='map-marked-alt'
                                                {...this.props}
                                                onEndEditing={(e) => this.filterList(e.nativeEvent.text)}
                                                title='جستجوی شهر' />
                                        }
                                        renderItem={({ item, index }) =>
                                            <TouchableWithoutFeedback onPress={this.selectRow(item, index)}>
                                                <View style={globalStyle.listContainer}>
                                                    <View style={styles.ostanCodeIcon}>
                                                        <IconMoon name="map-marked-alt" size={20}></IconMoon>
                                                    </View>
                                                    <View style={styles.ostanCodeStyle}>
                                                        <Text>{item.city_code}</Text>
                                                    </View>
                                                    <View style={styles.ostanNameStyle}>
                                                        <Text>{item.city_name}</Text>
                                                    </View>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        }>
                                    </FlatList> : null}
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}
//-------------------------------------------------------------------------
const styles = StyleSheet.create({
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
