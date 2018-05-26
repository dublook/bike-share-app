import * as React from 'react';
import { Container, Content, Text } from 'native-base';

import styles from './styles';

export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
  render() {
    const param = this.props.navigation.state.params;
    return (
      <Container style={styles.container}>
        <Content padder>
          <Text>{param !== undefined ? param.name : 'Create Something Awesome . . .'}</Text>
        </Content>
      </Container>
    );
  }
}

export default BlankPage;
