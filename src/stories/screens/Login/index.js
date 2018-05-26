import * as React from 'react';
import { Platform } from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Icon,
  Item,
  Input,
  Form,
} from 'native-base';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value =>
  (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined);
const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined);
// import styles from "./styles";
export interface Props {
  loginForm: any,
  handleSubmit: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
  renderInput({
    input, label, type, meta: { touched, error, warning },
  }) {
    return (
      <Item error={error && touched}>
        <Icon active name={input.name === 'email' ? 'person' : 'unlock'} />
        <Input
          ref={c => (this.textInput = c)}
          placeholder={input.name === 'email' ? 'Email' : 'Password'}
          secureTextEntry={input.name === 'password'}
          {...input}
        />
      </Item>
    );
  }

  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <Icon name="bicycle" style={{ fontSize: 104 }} />
            <Title>Bike Share APP</Title>
            <View padder>
              <Text style={{ color: Platform.OS === 'ios' ? '#000' : '#FFF' }}>
								近くのチャリ、見つけよう
              </Text>
            </View>
          </Body>
        </Header>
        <Content>
          <Form>
            <Field
              name="email"
              component={this.renderInput}
              validate={[email, required]}
            />
            <Field
              name="password"
              component={this.renderInput}
              validate={[alphaNumeric, minLength8, maxLength15, required]}
            />
          </Form>

          <View padder>
            <Button block onPress={this.props.handleSubmit}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'login',
})(Login);
