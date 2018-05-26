import React from 'react';
import { SafeAreaView } from 'react-navigation';

type Props = {
  children: ?React.Element,
}
class AppContainer extends React.Component<Props> {
  render() {
    const {
      children,
    } = this.props;
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'transparent' }}
      >
        {children}
      </SafeAreaView>
    );
  }
}
export default AppContainer;
