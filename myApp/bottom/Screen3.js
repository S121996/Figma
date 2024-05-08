import {View, Text} from 'react-native';
import React from 'react';

const Screen3 = ({navigation}) => {
  return (
    <View style={{flex: 1,backgroundColor:'blue',
     justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{fontSize: 30}}
        onPress={() => {
          navigation.openDrawer();
        }}>
        Screen3
      </Text>
    </View>
  );
};

export default Screen3;
