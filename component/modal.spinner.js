import React from 'react';
import { theme, globalStyle } from '../index';
import { View, Modal, StyleSheet } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';
import { Text } from 'native-base';
//-------------------------------------------------------
export default class ModalSpinner extends React.PureComponent {
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
                    <View style={[styles.container, globalStyle.modalShadow, globalStyle.modalContainer]}>
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
        width: 200, height: 110
    }
})