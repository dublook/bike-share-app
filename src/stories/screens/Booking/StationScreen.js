import React from 'react';
import {
  Container,
  Content,
  Text,
  Footer,
} from 'native-base';
import {
  BSSpinner,
  FloatingButton,
} from '../../components';

type Props = {
  isLoading: boolean,
  onBookingPress: Function,
}
export default ({
  isLoading, onBookingPress,
}:Props) => (
  <Container>
    {
      isLoading ?
        <BSSpinner />
      :
        <Container>
          <Content>
            <Text>Station Name</Text>
          </Content>
          <Footer>
            <FloatingButton
              onPress={onBookingPress}
            >
              <Text>Book This!</Text>
            </FloatingButton>
          </Footer>
        </Container>
    }
  </Container>
);

