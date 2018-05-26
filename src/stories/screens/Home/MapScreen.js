import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Spinner } from 'native-base';
import { MapView } from 'expo';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export type Props = {
  coords: Object,
  isReady: boolean,
}
class MapScreen extends Component<Props> {
  map: MapView;
  _handleReady = () => {
    const {
      latitude,
      longitude,
    } = this.props.coords;
    // OMG!! https://github.com/react-community/react-native-maps/pull/2131
    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }, 300);
    // this.props.handleReady();
  }

  render() {
    const {
      isReady,
    } = this.props;
    if (!isReady) {
      return (
        <Container>
          <Spinner />
        </Container>
      );
    }
    return (
      <Container>
        <MapView
          ref={(ref) => { this.map = ref; }}
          style={{
            flex: 1,
          }}
          onMapReady={this._handleReady}
          showsUserLocation
          showsCompass
          showsBuildings
          loadingEnabled
        />
      </Container>
    );
  }
}
export default MapScreen;
