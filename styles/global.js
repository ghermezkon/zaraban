import { StyleSheet, StatusBar } from 'react-native';
import color from "color";
import theme from './theme.global';
//------------------------------------------------------------------
const styles = StyleSheet.create({

    globalStatusBar: {
        height: StatusBar.currentHeight,
        backgroundColor: color(theme.HEADER_COLOR)
    },
    globalCenterFloat: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //---------------------Divider----------------------------------
    divider: {
        borderBottomColor: '#CFD8DC', borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    //-----------------------TabBar----------------------------------
    tabBar: {
        flexDirection: 'row',
        height: 64
    },
    tabBarButton: {
        flex: 1,
    },
    tabOne: { backgroundColor: 'transparent' },
    tabTwo: { backgroundColor: 'transparent' },
    tabThree: { backgroundColor: 'transparent', flex: 2, alignItems: 'center', justifyContent: 'center', paddingBottom: 10 },
    tabFour: { backgroundColor: 'transparent' },
    tabFive: { backgroundColor: 'transparent' },
    //--------------------Iuput & Item-------------------------------------
    formRTL:{
        flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'
    },
    itemRTL: { flexDirection: 'row-reverse' },
    inputNumber: {
        direction: 'rtl',
        textAlign: 'center',
        fontFamily: 'font-number'
    },
    inputText: {
        direction: 'rtl',
        textAlign: 'right',
        fontFamily: 'font-number'
    },
    inputIcon: { color: '#CE93D8', fontSize:18 },
    //-------------------FlatList----------------------------
    listContainer:{ 
        justifyContent: 'flex-start',
        width:'95%',
        direction: 'rtl',
        flexDirection: 'row-reverse',
        borderBottomWidth: 1,
    }
});
export default styles;