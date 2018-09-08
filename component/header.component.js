import React from 'react';
import { Header, Left, Icon, Right, Title, View } from 'native-base';
import { globalStyle } from '../index'
import { TouchableOpacity } from 'react-native';
const MaterialHeader = ({ ...props, title }) => {
    return (
        <View>
            <View style={globalStyle.globalStatusBar}></View>
            <Header style={{ direction: 'rtl' }}>
                <Left>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Icon name="arrow-back" style={{ color: '#fff' }}></Icon>
                    </TouchableOpacity>
                </Left>
                <Right>
                    <Title>{title}</Title>
                </Right>
            </Header>
        </View>
    )
}
export default MaterialHeader;