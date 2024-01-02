import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const InputBox = ({
  inputTitle,
  mode,
  value,
  onChangeText,
  secureTextEntry,
  autoComplete,
  style
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.inputBoxHeading}>{inputTitle}</Text>
      <TextInput
        style={style}
        mode={mode}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoComplete={autoComplete}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBoxHeading: {
    fontSize: 17,
    fontWeight: '400',
  },
});
