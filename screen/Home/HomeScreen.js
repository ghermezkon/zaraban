import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleProvider, Container, Content, Text } from 'native-base';
import {getTheme,platform,globalStyle,IconMoon,imgs } from '../../index';

import homeStyle from './HomeStyle'
//-----------------------------------------------------------------
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    //--------------------------------------------------
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Content>
                        <View style={homeStyle.row}>
                            <View style={homeStyle.col}>
                                <Image source={imgs.logo} style={{ width: 250 }} resizeMode="contain" />
                            </View>
                        </View>
                        <View style={homeStyle.row}>
                            <View style={homeStyle.col}>
                                <IconMoon name="beauty" style={homeStyle.homeIcon}/>
                                <Text style={homeStyle.homeText}>زیبایی</Text>
                            </View>
                            <View style={homeStyle.col} vartical>
                                <TouchableOpacity style={styles.menuItem} onPress={() => this.props.navigation.navigate('Test')}>
                                    <IconMoon name="global_doctor"
                                        style={homeStyle.homeIcon}/>
                                    <Text style={homeStyle.homeText}>پزشک عمومی</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={homeStyle.col} vartical>
                                <IconMoon name="phiziuo" style={homeStyle.homeIcon}/>
                                <Text style={homeStyle.homeText}>فیزیوتراپی</Text>
                            </View>
                        </View>
                        <View style={homeStyle.row}>
                            <View style={homeStyle.col}>
                                <IconMoon name="eye_doctor" style={homeStyle.homeIcon}/>
                                <Text style={homeStyle.homeText}>چشم پزشکی</Text>
                            </View>
                            <View style={homeStyle.col}>
                                <IconMoon name="dental_doctor" style={homeStyle.homeIcon}/>
                                <Text style={homeStyle.homeText}>دندانپزشکی</Text>
                            </View>
                            <View style={homeStyle.col} vartical>
                                <IconMoon name="beauty_salon" style={homeStyle.homeIcon}/>
                                <Text style={homeStyle.homeText}>سالن زیبایی</Text>
                            </View>
                        </View>
                    </Content>
                    {/* Footer */}
                    <View style={globalStyle.tabBar}>
                        <View style={[globalStyle.tabBarButton, globalStyle.tabOne]} />
                        <View style={[globalStyle.tabBarButton, globalStyle.tabeTwo]} />
                        <View style={[globalStyle.tabBarButton, globalStyle.tabThree]}>
                            <IconMoon name="medical" style={homeStyle.HomeMainButton}></IconMoon>
                        </View>
                        <View style={[globalStyle.tabBarButton, globalStyle.tabFour]} />
                        <View style={[globalStyle.tabBarButton, globalStyle.tabFive]} />
                    </View>
                </Container>
            </StyleProvider>
        )
    }
}
const styles = StyleSheet.create({
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
