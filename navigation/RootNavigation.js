import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from "../screen/Home/HomeScreen";
import HomeHeader from '../screen/Home/HomeHeader';
import DrawerContent from './DrawerContent'
import Ostan from '../screen/Ostan/Ostan';
//------------------------------------------------------
const RootStackNavigation = createStackNavigator(
    {
        Home: {
            screen: (props) => <HomeScreen {...props} />,
            navigationOptions: () => ({
                header: (props) => <HomeHeader {...props} />,
            })
        },
        // Ostan: {
        //     screen: Ostan
        // }
    }, {
        initialRouteName: 'Home',
    }
);
const DrawerNavigation = createDrawerNavigator(
    {
        Main: {
            screen: RootStackNavigation,
        },
        Ostan: {
            screen: (props) => <Ostan {...props} />,
        }
    }, {
        initialRouteName: 'Ostan',
        contentComponent: DrawerContent,
        useNativeAnimations: false,
        gesturesEnabled: false,
        drawerPosition: 'right',
    }
);
//------------------------------------------------------
export default class RootNavigation extends React.Component {
    render() {
        return <DrawerNavigation />
    }
}
//------------------------------------------------------