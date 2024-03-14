import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import {
  PinchGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {
  Svg,
  Line,
  Image as ImageSVG,
  Circle,
  G,
  Text as TextSVG,
} from 'react-native-svg';


import data from '../assets/data/listRoomSort.json';

const Floor4FE = require('../assets/images/4FE.jpg');

const RoomScreen = () => {
  const [dataRoom, setDataRoom] = useState(data.data[0]);
  const [dataSlot, setDataSlot] = useState(data.data[0].slots);

  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  // console.log('data: ', data);

  const handlePinch = Animated.event([{nativeEvent: {scale}}]);

  // console.log('scale: ', scale);
  const handlePan = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
        },
      },
    ],
    {
      listener: e => console.log('event: ', e),
      useNativeDriver: true,
    },
  );

  return (
    <View style={styles.container}>
      {/* <Svg
        width={data.data[0].imageInfo.width / 4}
        height={data.data[0].imageInfo.height / 4}>
        <G>
          <ImageSVG width="100%" height="100%" href={Floor4FE} />
          {dataSlot.map(itemSlot => {
            return (
              <G key={itemSlot._id}>
                <Circle
                  x={itemSlot.x / 4}
                  y={itemSlot.y / 4}
                  r={'2'}
                  fill={'red'}
                />
              </G>
            );
          })}
        </G>
      </Svg> */}
      <PanGestureHandler onGestureEvent={handlePan}>
        <Animated.View>
          <PinchGestureHandler onGestureEvent={handlePinch}>
            <Animated.Image
              style={{
                width: dataRoom.imageInfo.width / 4,
                height: dataRoom.imageInfo.height / 4,
                transform: [{scale: scale}, {translateX: translateX}],
              }}
              source={require('../assets/images/4FE.jpg')}
            />
          </PinchGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RoomScreen;
