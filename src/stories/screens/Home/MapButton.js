import React from 'react';
import {
  View,
  Button,
  Icon,
} from 'native-base';

type MapButtonProps = {
  onPress: any,
}
export default ({ onPress }: MapButtonProps) => (
  <View padder>
    <Button
      transparent
      onPress={onPress}
    >
      <Icon name="map" />
    </Button>
  </View>
);
