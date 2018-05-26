// @flow
import React from 'react';
import {
  Button,
  Icon,
  Text,
  View,
} from 'native-base';
import type { NavigationScreenProp } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

type MenuButtonProps = {
  navigation: NavigationScreenProp<*>,
}
export const MenuButton = ({ navigation }: MenuButtonProps) => (
  <View padder>
    <Button
      transparent
      onPress={() => {
      navigation.openDrawer();
    }}
    ><Icon name="menu" />
    </Button>
  </View>
);

type TitleProps = {
  title: string,
}
export const Title = ({ title }: TitleProps) => (
  <View padder><Text>{title}</Text></View>
);

type CloseButtonProps = {
  navigation: NavigationScreenProp<*>,
  closeRouteName: string,
  onPress: Function,
}
export const CloseButton = ({
  navigation,
  closeRouteName = 'Main',
  onPress = () => {
    NavigationActions.init({
      index: 0,
      actions: [navigation.navigate({ routeName: closeRouteName })],
    });
  },
}:CloseButtonProps) => (
  <View padder>
    <Button
      onPress={onPress}
      transparent
    ><Icon active name="close" />
    </Button>
  </View>
);
