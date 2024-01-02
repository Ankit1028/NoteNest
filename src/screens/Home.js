import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthContext} from '../context/authContext';

const Home = ({navigation}) => {
  // const reduxdata = useSelector(state => state);
  const userName = useSelector(state => state.userName);
  const email = useSelector(state => state.email);
  const token = useSelector(state => state.token);
  const [state] = useContext(AuthContext);
  // console.log('reduxdata', reduxdata);
  return (
    <View>
      <Text>{JSON.stringify(state, null, 4)}</Text>
      <Text>{userName}</Text>
      <Text>{email}</Text>
      <Text>{token}</Text>
    </View>
  );
};

export default Home;
