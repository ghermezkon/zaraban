import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from "../screen/Home/HomeScreen";
import HomeHeader from '../screen/Home/HomeHeader';
import DrawerContent from './DrawerContent'
import Ostan from '../screen/Ostan/Ostan';
import City from '../screen/City/City';
import { theme } from '../index';
//------------------------------------------------------
const RootStackNavigation = createStackNavigator(
    {
        Home: {
            screen: (props) => <HomeScreen {...props} />,
            navigationOptions: () => ({
                header: (props) => <HomeHeader {...props} />,
            })
        },
        Ostan: {
            screen: (props) => <Ostan {...props} />,
            navigationOptions: () => ({
                headerTitle: 'تعریف استان',
            })
        },
        City: {
            screen: (props) => <City {...props} />,
            navigationOptions: () => ({
                headerTitle: 'تعریف شهر',
            })
        }
    }, {
        initialRouteName: 'Home',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
            },
        }),
        navigationOptions: {
            headerStyle: {
                backgroundColor: theme.HEADER_COLOR
            },
            headerTitleStyle: {
                color: "#fff",
                fontFamily: "font-bold",
                textAlign: 'right',
                flex: 1
            },
            headerTintColor: "#fff",
        }
    }
);
const DrawerNavigation = createDrawerNavigator(
    {
        Main: {
            screen: RootStackNavigation,
        },
        // Ostan: {
        //     screen: (props) => <Ostan {...props} />,
        // },
        // City:{
        //     screen: (props) => <City {...props} />,
        // }
    }, {
        initialRouteName: 'Main',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
            },
        }),
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