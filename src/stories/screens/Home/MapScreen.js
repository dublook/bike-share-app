import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Spinner, Text, Button } from 'native-base';
import { MapView } from 'expo';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export type Props = {
  coords: Object,
  isReady: boolean,
  stations: Array<any>,
  onCalloutPress: Function,
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

  _handleMarkerPress = (coords) => {
    this.map.animateToRegion({
      ...coords,
    });
  }

  render() {
    const {
      isReady,
      stations,
      onCalloutPress,
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
        >
          {
            stations && stations.map(station => (
              <MapView.Marker
                onPress={() => this._handleMarkerPress(station.coords)}
                coordinate={station.coords}
              >
                <MapView.Callout>
                  <Text>{station.name}</Text>
                  <Button
                    onPress={() => onCalloutPress(station.id, station.name)}
                  >
                    <Text>Book Now</Text>
                  </Button>
                </MapView.Callout>
              </MapView.Marker>
            ))
          }
        </MapView>
      </Container>
    );
  }
}
export default MapScreen;
