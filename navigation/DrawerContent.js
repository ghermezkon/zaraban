import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleProvider, Header, Text } from 'native-base';

import PropTypes from 'prop-types';
import globalStyle from '../styles/global';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from '../assets/svg/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);
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
                            <Icon name="home" style={styles.iconSize} />
                        </TouchableOpacity>
                        <View style={globalStyle.divider}></View>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Ostan')}>
                            <Text style={styles.menuItem}>تعریف استان</Text>
                            <Icon name="map-marker-alt" style={styles.iconSize} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعریف شهر</Text>
                            <Icon name="map-marked-alt" style={styles.iconSize} />
                        </TouchableOpacity>
                        <View style={globalStyle.divider}></View>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعاریف اولیه مطب</Text>
                            <Icon name="matab" style={styles.iconSize} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعاریف تکمیلی مطب</Text>
                            <Icon name="matab_more" style={styles.iconSize} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعریف انواع پزشک</Text>
                            <Icon name="user-md" style={styles.iconSize} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuContainer} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.menuItem}>تعریف انواع تخصص</Text>
                            <Icon name="type_work" style={styles.iconSize} />
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