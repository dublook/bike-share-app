// @flow
import { Permissions, Location } from 'expo';

export async function getLocationAsync(onCompletion: Function) {
  const { status } = await Permissions.getAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    const { askStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (askStatus !== 'granted') {
      console.log('Hey! You might want to enable notifications for my app, they are good.');
      return;
    }
  }
  const { coords } = await Location.getCurrentPositionAsync({});
  onCompletion(coords);
}
