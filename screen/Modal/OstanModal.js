import React from 'react';
import { globalStyle } from '../../index';
import { View, Modal, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, ListItem, Left, Right, Radio, Content, Container, Footer } from 'native-base';
import theme from '../../styles/theme.global'
//-------------------------------------------------------
export default class OstanModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openOstanModal: true,
            ostanList: [],
            ostan: {},
        }
    }
    //---------------------------------------------------
    ostanChange = () => {
        this.props.ostanChange(this.state.ostan)
    }
    //---------------------------------------------------
    componentDidMount() {
        this.setState({
            ostanList: this.props.ostanList,
            ostan: this.props.ostanSelect
        })
    }
    //---------------------------------------------------
    render() {
        return (
            <Modal
                animationType="none"
                transparent={true}
                visible={this.state.openOstanModal}
                onRequestClose={() => this.setState({ isClose: false })}>
                <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[styles.container, globalStyle.modalShadow, globalStyle.modalContainer]}>

                        <Container style={{ width: '100%', backgroundColor: theme.MODAL_COLOR }}>
                            <ScrollView>
                                <Content>
                                    {this.state.ostanList.map((data, i) => {
                                        return (
                                            <ListItem key={i} onPress={() => this.setState({ ostan: data })} selected={this.state.ostan.ostan_name == data.ostan_name}>
                                                <Left style={{ justifyContent: 'flex-end' }}>
                                                    <Text>{data.ostan_name} ({data.ostan_code})</Text>
                                                </Left>
                                                <Right>
                                                    <Radio onPress={() => this.setState({ ostan: data })} selected={this.state.ostan.ostan_name == data.ostan_name} />
                                                </Right>
                                            </ListItem>
                                        )
                                    })}
                                </Content>
                            </ScrollView>
                            <Footer style={{ backgroundColor: theme.MODAL_COLOR }}>
                                <Left>
                                    <Button block success onPress={this.ostanChange}>
                                        <Text style={{ fontFamily: 'font-bold' }}>تائید</Text>
                                    </Button>
                                </Left>
                            </Footer>
                        </Container>
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: 300, height: 300
    },
})