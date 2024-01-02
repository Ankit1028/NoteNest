import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = ({navigation}) => {
  const [state, setState] = useContext(AuthContext);

  async function onLogoutPress() {
    setState({
      token: '',
      user: null,
    });
    await AsyncStorage.removeItem('token');
    navigation.navigate("Login");
    Alert.alert('Logout Succesfully');
    console.log("stateeee",state);
  }
  return (
    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
      <TouchableOpacity
      onPress={onLogoutPress}
        style={{
          height: 40,
          width: 150,
          backgroundColor: 'red',
          alignSelf: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
