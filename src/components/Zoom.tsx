import React, {FunctionComponent, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';

interface ZoomProps {
  children: JSX.Element | JSX.Element[];
}

const Zoom: FunctionComponent<ZoomProps> = ({children}) => {
  const [doublePress, setDoublePress] = useState<boolean>(false);

  const scale = useSharedValue(1);

  const zoom = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
    onActive: event => {
      console.log(event.scale);
      scale.value = event.scale;
    },
    onEnd: event => {
      console.log(event.scale);
      scale.value = event.scale;
    },
  });

  const onHandlePress = () => {
    setDoublePress(true);
    setTimeout(() => {
      setDoublePress(false);
    }, 500);
    if (doublePress) {
      scale.value = withTiming(scale.value + 0.2);
    }
  };

  return (
    <PinchGestureHandler onGestureEvent={zoom}>
      <Animated.View
        style={[
          useAnimatedStyle(() => {
            return {
              transform: [{scale: scale.value}],
            };
          }),
        ]}>
        <TouchableOpacity onPress={onHandlePress}>{children}</TouchableOpacity>
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default Zoom;
