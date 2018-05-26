// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Item, Input, Icon, Toast, Form } from 'native-base';

import { login } from '../../auth/actions';

import Login from '../../stories/screens/Login';

export type Props = {
  navigation: any,
  login: Function,
}
export interface State {}
class LoginContainer extends React.Component<Props, State> {
  textInput: any;

  login = (values: {email: string, password:string}) => {
    this.props.login(values.email, values.password);
    this.props.navigation.navigate('Drawer');
    // Toast.show({
    //   text: 'Enter Valid Username & password!',
    //   duration: 2000,
    //   position: 'top',
    //   textStyle: { textAlign: 'center' },
    // });
  }

  render() {
    return (
      <Login
        navigation={this.props.navigation}
        onSubmit={this.login}
      />
    );
  }
}
export default connect(null, { login })(LoginContainer);
