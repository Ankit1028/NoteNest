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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {emailValue, tokenValue, userNameValue} from '../../redux/action/action';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  function navigateToRegister() {
    navigation.navigate('Register');
  }

  async function handleSubmitPress() {
    try {
      if (!email && email == '') {
        Alert.alert('Email Cannot be Empty');
      } else if (!password && password == '') {
        Alert.alert('Password Cannot be Empty');
      } else if (password.length < 7) {
        Alert.alert('Password Should be atleast 6 characters');
      } else {
        const response = await axios.post(
          'http://192.168.29.237:8080/api/v1/auth/login',
          {email, password},
        );
        Alert.alert(response.data.message);
        await AsyncStorage.setItem('token', JSON.stringify(response.data));
        console.log('------>', response?.data, response?.data?.token);
        dispatch(userNameValue(response?.data?.user?.name));
        dispatch(emailValue(response?.data?.user?.email));
        dispatch(tokenValue(response?.data?.token))
        navigation.navigate('TabNavigation');
        // console.log('response', response.data);
        // console.log('Details Registered :>', email, password);
      }
    } catch (err) {
      console.log(err);
      Alert.alert(err.response.data.message);
    }
  }
  // check data stored
  // const getData = async () => {
  //   let data = await AsyncStorage.getItem('token');
  //   console.log('data-->', data);
  // };
  // getData();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.headerText}>Login</Text>
        <View style={styles.formCard}>
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
            <CustomButton label={'Submit'} onPress={handleSubmitPress} />
          </View>
          <TouchableOpacity
            style={styles.bottomTextView}
            onPress={navigateToRegister}>
            <Text style={styles.bottomText}>
              Not a Registered User ?
              <Text style={styles.boldBottomText}> REGISTER </Text>
              here
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;
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
