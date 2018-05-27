import React from 'react';

type Props = {
  children: ?React.Element,
}
class AppContainer extends React.Component<Props> {
  render() {
    const {
      children,
    } = this.props;
    return (
      { ...children }
    );
  }
}
export default AppContainer;
