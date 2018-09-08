import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleProvider, Header, Text } from 'native-base';
import PropTypes from 'prop-types';

import { IconMoon, platform, getTheme, globalStyle } from '../index';
//---------------------------------------------------------------------
class DrawerContent extends Component {
    navigateToScreen = (route) => () => {
        const navigate = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigate);
    }
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <View>
                    <View style={globalStyle.globalStatusBar}></View>
                    <Header></Header>
                    <ScrollView>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>صفحه اصلی</Text>
                            <IconMoon name="home" style={styles.iconSize} />
                        </TouchableOpacity>
                        <View style={globalStyle.divider}></View>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Ostan')}>
                            <Text style={styles.menuItem}>تعریف استان</Text>
                            <IconMoon name="map-marker-alt" style={styles.iconSize} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعریف شهر</Text>
                            <IconMoon name="map-marked-alt" style={styles.iconSize} />
                        </TouchableOpacity>
                        <View style={globalStyle.divider}></View>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعاریف اولیه مطب</Text>
                            <IconMoon name="matab" style={styles.iconSize} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعاریف تکمیلی مطب</Text>
                            <IconMoon name="matab_more" style={styles.iconSize} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعریف انواع پزشک</Text>
                            <IconMoon name="user-md" style={styles.iconSize} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعریف انواع تخصص</Text>
                            <IconMoon name="type_work" style={styles.iconSize} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </StyleProvider>
        );
    }
}
//---------------------------------------------
DrawerContent.propTypes = {
    navigation: PropTypes.object
};
//---------------------------------------------
const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        direction: 'rtl',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 12
    },
    menuItem: {
        flex: 1,
        padding: 10,
    },
    iconSize: {
        fontSize: 20,
        color: '#455A64'
    }
})
export default DrawerContent;