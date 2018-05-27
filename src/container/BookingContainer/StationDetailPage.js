import React from 'react';
import { CloseButton, Title } from '../../stories/components/BSHeader';
import { StationScreen } from '../../stories/screens/Booking';

type Props = {
  navigation: any,
}
class StationDetailPage extends React.Component<Props> {
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

  handleOnBookingPress = () => {
    this.props.navigation.navigate('BookingPage');
  }

  render() {
    return (
      <StationScreen
        isLoading={false}
        onClosePress={this.handleOnClosePress}
        onBookingPress={this.handleOnBookingPress}
      />
    );
  }
}

export default StationDetailPage;
