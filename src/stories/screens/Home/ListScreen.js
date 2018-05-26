import * as React from 'react';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  List,
  ListItem,
  View,
} from 'native-base';

import styles from './styles';

import MapScreen from './MapScreen';

export type Props = {
  list: any,
  onItemPress: Function,
  coords: Object,
  isLoading: boolean,
}
export default({
  onItemPress, list, coords, isLoading,
}: Props) => {
  if (isLoading) {
    return (
      <Container />
    );
  }
  return (
    <Container style={styles.container}>
      <Content>
        <Text>{`あなたの場所は${coords.latitude},${coords.longitude}`}</Text>
        <List>
          {list.map(item => (
            <ListItem
              key={item.id}
              onPress={() => onItemPress({
                id: item.id,
                name: item.name,
              })}
            >
              <Text>{item.name}</Text>
            </ListItem>
        ))}
        </List>
      </Content>
    </Container>
  );
};

type MapButtonProps = {
  onPress: any,
}
const MapButton = ({ onPress }: MapButtonProps) => (
  <View padder>
    <Button
      transparent
      onPress={onPress}
    >
      <Icon name="map" />
    </Button>
  </View>
);

export { MapButton, MapScreen };
