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
    formRTL: {
        flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'
    },
    error: {
        fontSize: 13, color: theme.ERROR_COLOR
    },
    //-------------------FlatList----------------------------
    listContainer: {
        elevation: 1,
        borderRadius: 2,
        backgroundColor: theme.CONTAINER_COLOR,
        flex: 1,
        flexDirection: 'row-reverse',  // main axis
        justifyContent: 'flex-start', // main axis
        alignItems: 'center', // cross axis
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 9,
        paddingRight: 16,
        marginLeft: 1,
        marginRight: 1,
        marginTop: 0,
        marginBottom: 6,
    },
    //-------------------------Modal----------------------------------
    modalShadow: {
        // ios
        shadowColor: '#03A9F4',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 2,
    },
    modalContainer: {
        opacity: 1, padding: 5, justifyContent: 'center',
        alignItems: 'center', backgroundColor: theme.MODAL_COLOR, borderRadius: 10
    }
});
export default styles;