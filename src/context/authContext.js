import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

//context
const AuthContext = createContext();
const userName = useSelector(state => state.userName);
const token = useSelector(state => state.token);

//provider
const AuthProvider = ({children}) => {
  const [state, setState] = useState({
    user: null,
    token: '',
  });

  //default axios 
  axios.defaults.baseURL = "http://192.168.29.237:8080/api/v1";

  //initial data
  useEffect(() => {
    
    const loadUserData = async () => {
      const data = await AsyncStorage.getItem('token');
      const parsedData = JSON.parse(data);
      setState({
        ...state,
        user: parsedData?.user,
        token: parsedData?.token,
      });
      console.log("bahah", parsedData)
    };
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthContext, AuthProvider};
