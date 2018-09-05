import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.global';
//----------------------------------------------------------
const HomeStyle = StyleSheet.create({    
    
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 128,
    },
    col:{
        flex:1,
        alignItems: 'center',
    }, 
    homeIcon:{
        color: theme.FONT_COLOR,
        fontSize:28,        
    },
    homeText:{
        fontFamily: 'font-bold',
        color: theme.FONT_COLOR
    },
    HomeMainButton:{
        color: theme.HEADER_COLOR,
        fontSize:30,        
    }
});
export default HomeStyle;