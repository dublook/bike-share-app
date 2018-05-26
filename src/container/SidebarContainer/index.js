// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../auth/actions';
import Sidebar from '../../stories/screens/Sidebar';

export interface Props {
  navigation: any,
  logout: Function,
}
export interface State {}
class SidebarContainer extends React.Component<Props, State> {
  render() {
    return <Sidebar onLogoutPress={this.props.logout} navigation={this.props.navigation} />;
  }
}

export default connect(null, { logout })(SidebarContainer);
