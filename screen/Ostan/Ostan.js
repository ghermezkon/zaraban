import React from 'react';

import { Container, View, Text, Icon, StyleProvider, Content, Label, Button, Card, CardItem } from 'native-base';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';

import {
    MaterialInput, MaterialToast, getTheme, platform, IconMoon, MaterialHeader,
    MaterialListHeader, constant, httpApi, ModalSpinner, validator, theme, globalStyle
} from '../../index';
import _ from 'lodash';
//-------------------------------------------------
export default class Ostan extends React.PureComponent {
    //---------------------------------------------    
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            ostan_code: '',
            ostan_name: '',

            dataList: [],
            isLoading: true,
            ostan_code_error: null,
            ostan_name_error: null,
            row_index: -1,
            full_list: ''
        }
    }
    //---------------------------------------------
    componentDidMount() {
        fetch(httpApi.get_all_ostan).then((res) => res.json()).then((resJSON) => {
            this.setState({ dataList: resJSON, isLoading: false })
        })
    }
    //---------------------------------------------
    save = () => {
        if (this.state.row_index != -1) {
            this.edit();
        }
        else {
            if (this.state.ostan_code == '' || this.state.ostan_name == '') {
                MaterialToast(constant.FORM_INVALID, 'danger')
            } else {
                let find_index = this.state.dataList.findIndex(el => el.ostan_code == this.state.ostan_code
                    || el.ostan_name == this.state.ostan_name);
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
                            ostan_code: this.state.ostan_code,
                            ostan_name: this.state.ostan_name
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
            ostan_code: item.ostan_code,
            ostan_name: item.ostan_name,
            row_index: index
        })
    }
    //---------------------------------------------
    edit = () => {
        let temp_list = [...this.state.dataList];

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
                    ostan_code: this.state.ostan_code,
                    ostan_name: this.state.ostan_name
                })
            }).then((res) => res.json()).then(() => {

                temp_list[this.state.row_index]._id = this.state._id;
                temp_list[this.state.row_index].ostan_code = this.state.ostan_code;
                temp_list[this.state.row_index].ostan_name = this.state.ostan_name;

                this.setState({ dataList: [...temp_list] }, function () { this.resetForm() });
                MaterialToast(constant.UPDATE_OK_MSG, 'success')
            })
        }
    }
    //---------------------------------------------
    resetForm() {
        this.setState({
            ostan_code: '',
            ostan_name: '',
            ostan_code_error: null,
            ostan_name_error: null,
            isLoading: false
        })
    }
    //---------------------------------------------
    filterList(value) {
        if (!_.isEmpty(_.toString(value))) {
            this.setState({ full_list: this.state.dataList });
            if (!_.isEmpty(_.toString(value))) {
                data = _.filter(this.state.dataList, o => _.includes(o.ostan_name, value))
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

                    <MaterialHeader {...this.props} title='تعریف استان' />
                    <Content padder>
                        <ModalSpinner isLoading={this.state.isLoading} />
                        <Card>
                            <CardItem bordered style={globalStyle.formRTL}>
                                <MaterialInput value={this.state.ostan_code}
                                    label='کد استان:' keyboardType="numeric"
                                    iconName="number"  textAlign="center"
                                    onChangeText={(value) => this.setState({ ostan_code: value })}
                                    onEndEditing={() => {
                                        this.setState({
                                            ostan_code_error: validator('ostan_code', this.state.ostan_code)
                                        })
                                    }}
                                    error={this.state.ostan_code_error} />
                                <Label style={globalStyle.error}>{this.state.ostan_code_error}</Label>

                                <MaterialInput value={this.state.ostan_name}
                                    label='نام استان:' iconName="document" textAlign="right"
                                    onChangeText={(value) => this.setState({ ostan_name: value })}
                                    onEndEditing={() => {
                                        this.setState({
                                            ostan_name_error: validator('ostan_name', this.state.ostan_name)
                                        })
                                    }}
                                    error={this.state.ostan_name_error} />
                                <Label style={globalStyle.error}>{this.state.ostan_name_error}</Label>

                                <Button iconRight block style={styles.button} onPress={this.save}>
                                    <Text>{constant.SAVE_BUTTON_TEXT}</Text>
                                    <Icon type="MaterialIcons" name='save' />
                                </Button>
                            </CardItem>
                            <CardItem bordered>
                                <FlatList itemDivider data={this.state.dataList} keyExtractor={item => item.ostan_code}
                                    ListHeaderComponent={
                                        <MaterialListHeader icon='map-marker-alt'
                                            {...this.props}
                                            onEndEditing={(e) => this.filterList(e.nativeEvent.text)}
                                            title='جستجوی استان' />
                                    }
                                    renderItem={ ({ item, index }) =>
                                            <TouchableOpacity onPress={this.selectRow(item, index)}>
                                                <View style={globalStyle.listContainer}>
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
                                    }>
                                </FlatList>
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
