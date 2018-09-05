import React from 'react';
import { Header, View, Left, Button, Icon, Body, Right, Title, StyleProvider } from 'native-base';

import globalStyle from '../../styles/global';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';
//-------------------------------------------------------
export default class HomeHeader extends React.Component {
    //---------------------------------------------------
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <View>
                    <View style={globalStyle.globalStatusBar}></View>
                    <Header>
                        <Left style={{ flex: 0 }}>
                            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body style={globalStyle.globalCenterFloat}>
                            <Title>دستیار پزشکی ضربان</Title>
                        </Body>
                        <Right style={{ flex: 0 }}>
                            <Button transparent>
                                <Icon name="md-woman" />
                            </Button>
                        </Right>
                    </Header>
                </View>
            </StyleProvider>
        )
    }
    //---------------------------------------------------
}