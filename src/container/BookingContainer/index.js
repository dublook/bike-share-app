import React from 'react';
import { CloseButton, Title } from '../../stories/components/BSHeader';
import { StationScreen } from '../../stories/screens/Booking';

type Props = {
  navigation: any,
}
class BookingContainer extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Title title={navigation.state.params.name} />,
    headerLeft: (
      <CloseButton
        onPress={() => {
        navigation.dismiss();
      }}
      />
    ),
  });

  handleOnClosePress = () => {
    this.props.navigation.dismiss();
  }

  render() {
    const {
      navigation,
    } = this.props;
    return (
      <StationScreen
        navigation={navigation}
        stationName={navigation.state.params.name}
        isLoading={false}
        onClosePress={this.handleOnClosePress}
      />
    );
  }
}

export default BookingContainer;
