// @flow
import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import AppContainer from './container/AppContainer';
import Login from './container/LoginContainer';
import { ListContainer, MapContainer } from './container/HomeContainer';
import BlankPage from './container/BlankPageContainer';
import Sidebar from './container/SidebarContainer';

const stackNavigationOptions = {
  gesturesEnabled: true,
};

const HomeStack = createStackNavigator(
  {
    Home: { screen: ListContainer },
    MapPage: { screen: MapContainer },
    DetailPage: { screen: BlankPage },
  },
  {
    initialRouteName: 'Home',
    NavigationOptions: stackNavigationOptions,
  },
);

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeStack },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {...props} />,
  },
);


type Props = {
  email: string,
  password: string,
}
class Application extends React.Component<Props> {
  render() {
    const {
      email,
      password,
    } = this.props; // TODO use auth_token instead
    const App = createStackNavigator(
      {
        Login: { screen: Login },
        BlankPage: { screen: BlankPage },
        Drawer: { screen: Drawer },
      },
      {
        initialRouteName: (email && password) ? 'Drawer' : 'Login',
        headerMode: 'none',
      },
    );

    return (
      <Root>
        <AppContainer>
          <App />
        </AppContainer>
      </Root>
    );
  }
}
export default connect(state => ({
  email: state.authReducer.email,
  password: state.authReducer.password,
}), null)(Application);
