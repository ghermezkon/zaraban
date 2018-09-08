import React from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading, Font } from 'expo';
import RootNavigation from './navigation/RootNavigation';
import { Root } from 'native-base';
//-----------------------------------------------------------
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'font-number': require('./assets/fonts/IRANSansMobile_fa_Light.ttf'),
      'font-bold': require('./assets/fonts/IRANSansMobile_Bold.ttf'),
      'svgicon': require('./assets/svg/svgicon.ttf')
    })
    this.setState({ isReady: true })
  }
  //---------------------------------------------------
  render() {
    if (!this.state.isReady) return <AppLoading />;
    return (
      <Root>
        <RootNavigation />
      </Root>
    )
  }
}
//-------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
