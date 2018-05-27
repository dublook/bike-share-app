import React from 'react';
import {
  Container,
  Content,
  Text,
} from 'native-base';
import {
  BSSpinner,
  FloatingButton,
} from '../../components';

type Props = {
  isLoading: boolean,
}
export default ({
  isLoading,
}:Props) => (
  <Container>
    {
      isLoading ?
        <BSSpinner />
      :
        <Container>
          <Content>
            <FloatingButton>
              <Text>Book This!</Text>
            </FloatingButton>
          </Content>
        </Container>
    }
  </Container>
);

