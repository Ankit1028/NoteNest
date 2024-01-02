import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigation'

const Route = () => {
  return (
    <NavigationContainer>
    <StackNavigation initialScreen={"Login"} />
  </NavigationContainer>
  )
}

export default Route