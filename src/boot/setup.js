import * as Expo from 'expo';
import * as React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from './configureStore';
import App from '../App';
import getTheme from '../theme/components';
import variables from '../theme/variables/platform';

export interface Props {}
export interface State {
  store: Object,
  isLoading: boolean,
  isReady: boolean,
  persistor: Object,
}
export default class Setup extends React.Component<Props, State> {
  constructor() {
    super();
    const { store, persistor } = configureStore(() => this.setState({ isLoading: false }));
    this.state = {
      isLoading: false,
      isReady: false,
      store,
      persistor,
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <PersistGate loading={null} persistor={this.state.persistor}>
            <App />
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}
