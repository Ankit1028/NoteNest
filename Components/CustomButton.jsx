import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnView} onPress={onPress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnView: {
    height: 50,
    backgroundColor: '#5D3587',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#F6F7C4',
  },
});
