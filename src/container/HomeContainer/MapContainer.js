// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Permissions, Location } from 'expo';

import { MapScreen } from '../../stories/screens/Home';
import { Title } from '../../stories/components/BSHeader';

import datas from './data';
import { fetchList } from './actions';

type Props = {
  navigation: any,
  fetchList: Function,
  data: Object,
  isLoading: boolean,
}
type State = {
  coords: ?Object,
  isReady: boolean,
}
class MapContainer extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Title title="近くのチャリ" />,
    // headerRight: (
    //   <MapButton
    //     onPress={() => {
    //       navigation.navigate('MapPage');
    //     }}
    //   />
    // ),
  });

  state = {
    coords: {
      latitude: 32.662143,
      longitude: 139.699606,
    },
    isReady: false,
  }

  componentDidMount() {
    this.props.fetchList(datas);
    this._getLocationAsync();
  }

  handleItemPress = (id: string, name: string) => {
    this.props.navigation.navigate('DetailPage', {
      id, name,
    });
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      await this._askIfLocationGrantted();
    } else {
      await this._getLocation();
    }
  }

  _askIfLocationGrantted = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Hey! You might want to enable notifications for my app, they are good.');
    }
    await this._getLocation();
  }

  _getLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync({});
    this.setState({
      coords,
      isReady: true,
    });
  }

  render() {
    const {
      isLoading,
    } = this.props;
    return (
      <MapScreen
        isLoading={isLoading}
        isReady={this.state.isReady}
        navigation={this.props.navigation}
        list={this.props.data}
        onItemPress={this.handleItemPress}
        coords={this.state.coords}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url)),
  };
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(MapContainer);
