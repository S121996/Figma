import {View, Text} from 'react-native';
import React from 'react';

const Screen2 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',
      backgroundColor:'yellow'
    }}>
      <Text
        style={{fontSize:30}}
        onPress={() => {
          navigation.openDrawer();
        }}>
        Screen2
      </Text>
    </View>
  );
};

export default Screen2;
