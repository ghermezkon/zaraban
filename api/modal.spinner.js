import React from 'react';
import theme from '../styles/theme.global';
import { View, Modal, StyleSheet } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';
import { Text } from 'native-base';
//-------------------------------------------------------
export default class ModalSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    //---------------------------------------------------
    componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            isLoading: nextProps['isLoading']
        })
    }
    //---------------------------------------------------
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    //---------------------------------------------------
    render() {
        return (
            <Modal
                animationType="none"
                transparent={true}
                visible={this.state.isLoading}
                onRequestClose={() => this.setState({ flagClose: false })}>
                <View style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={[styles.container, styles.shadow]}>
                        <UIActivityIndicator size={40} color={theme.HEADER_COLOR} />
                        <Text style={{ marginTop: 30 }}>لطفاً صبر کنید ...</Text>
                    </View>
                </View>
            </Modal>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: 200, height: 110, opacity: 1, padding: 30, justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#f7f7f7', borderRadius: 10
    },
    shadow: {
        // ios
        shadowColor: '#03A9F4',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        // android (Android +5.0)
        elevation: 2,
    }
})