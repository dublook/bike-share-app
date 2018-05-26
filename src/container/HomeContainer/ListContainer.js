// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Permissions, Location } from 'expo';

import { ListScreen, MapButton } from '../../stories/screens/Home';
import { Title, MenuButton } from '../../stories/components/BSHeader';

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
}
class ListContainer extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <MenuButton navigation={navigation} />
    ),
    headerTitle: <Title title="近くのチャリ" />,
    headerRight: (
      <MapButton
        onPress={() => {
          navigation.navigate('MapPage');
        }}
      />
    ),
  });

  state = {
    coords: {
      latitude: 32.662143,
      longitude: 139.699606,
    },
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
    });
  }

  render() {
    const {
      isLoading,
    } = this.props;
    return (
      <ListScreen
        isLoading={isLoading}
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
export default connect(mapStateToProps, bindAction)(ListContainer);
