import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../../Components/InputBox';
import CustomButton from '../../../Components/CustomButton';
import axios from 'axios';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function navigationToLogin() {
    navigation.navigate('Login');
  }

  async function handleRegisterPress() {
    try {
      if (!name && name == '') {
        Alert.alert('Name Cannot be Empty');
      } else if (!email && email == '') {
        Alert.alert('Email Cannot be Empty');
      } else if (!password && password == '') {
        Alert.alert('Password Cannot be Empty');
      } else if (password.length < 7) {
        Alert.alert('Password Should be atleast 6 characters');
      } else {
        const response = await axios.post(
          'http://192.168.29.237:8080/api/v1/auth/register',
          {name, email, password},
        );
        Alert.alert(response.data.message);
        console.log('response', response.data);
        console.log('Details Registered :>', name, email, password);
      }
    } catch (err) {
      console.log(err);
      Alert.alert(err.response.data.message);
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.headerText}>Register</Text>
        <View style={styles.formCard}>
          <View style={styles.textInput}>
            <InputBox
              inputTitle={'Name'}
              mode={'outlined'}
              // value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.textInput}>
            <InputBox
              inputTitle={'Email'}
              mode={'outlined'}
              autoComplete={'email'}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.textInput}>
            <InputBox
              inputTitle={'Password'}
              mode={'outlined'}
              secureTextEntry={true}
              autoComplete={'password'}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          {/* <Text>{JSON.stringify({name, email, password}, null, 4)}</Text> */}
          <View style={styles.buttonView}>
            <CustomButton label={'Register'} onPress={handleRegisterPress} />
          </View>
          <TouchableOpacity
            style={styles.bottomTextView}
            onPress={navigationToLogin}>
            <Text style={styles.bottomText}>
              Already Registered ?
              <Text style={styles.boldBottomText}> LOGIN </Text>
              here
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Register;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#89B9AD',
    flex: 1,
    justifyContent: 'center',
  },
  formCard: {
    // flex: 0.5,
    backgroundColor: '#fff',
    margin: '5%',
    padding: '5%',
    borderRadius: 30,
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '700',
  },
  textInput: {
    marginVertical: '3%',
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  bottomTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginB:'5%'
  },
  bottomText: {
    fontSize: 15,
    fontWeight: '500',
  },
  boldBottomText: {
    fontSize: 15,
    fontWeight: '900',
  },
});
