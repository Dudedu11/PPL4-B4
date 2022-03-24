import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
	const name = "Maru";
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text numberOfLines={2}>Hello, world! {maru}</Text>
    </View>
  );
}

export default HelloWorldApp;