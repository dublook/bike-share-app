// @flow
import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';
import AppContainer from './container/AppContainer';
import Login from './container/LoginContainer';
import { ListContainer, MapContainer } from './container/HomeContainer';
import { StationDetailPage } from './container/BookingContainer';
import BlankPage from './container/BlankPageContainer';
import Sidebar from './container/SidebarContainer';

const stackNavigationOptions = {
  gesturesEnabled: true,
};

const SearchStack = createStackNavigator(
  {
    ListPage: { screen: ListContainer },
    MapPage: { screen: MapContainer },
  },
  {
    navigationOptions: stackNavigationOptions,
  },
);

const BookingStack = createStackNavigator(
  {
    DetailPage: { screen: StationDetailPage },
    BookingPage: { screen: BlankPage },
  },
  {
    initialRouteName: 'DetailPage',
    navigationOptions: stackNavigationOptions,
  },
);

const HomeStack = createStackNavigator(
  {
    Home: { screen: SearchStack },
    BookingStack: { screen: BookingStack },
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    navigationOptions: stackNavigationOptions,
    headerMode: 'nonde',
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
