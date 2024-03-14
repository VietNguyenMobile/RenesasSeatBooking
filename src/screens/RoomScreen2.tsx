import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Alert,
  Button,
} from 'react-native';
import {
  PinchGestureHandler,
  gestureHandlerRootHOC,
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
import SvgPanZoom, {SvgPanZoomElement} from 'react-native-svg-pan-zoom';
import Canvas from 'react-native-canvas';
import data from '../assets/data/listRoom.json';
import Zoom from '../components/Zoom';
import ImageZoom from '@likashefqet/react-native-image-zoom';

const Floor4FE = require('../assets/images/4FE.jpg');
const Floor3FE_PNG = require('../assets/images/3FW-2.png');

import Floor3FW_SVG from '../assets/images/3FW-1.svg';
const imageUri = 'https://images.unsplash.com/photo-1596003906949-67221c37965c';

const RoomScreen2 = () => {
  const [dataRoom, setDataRoom] = useState(data.data[5]);
  const [dataSlot, setDataSlot] = useState(data.data[5].slots);
  const [isVisible, setVisible] = useState(true);

  console.log('dataRoom.roomName: ', dataRoom.roomName);
  console.log('dataSlot: ', dataSlot[0]);

  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const ctx = ref.current.getContext('2d');
  //     ctx.fillStyle = 'red';
  //     ctx.fillRect(20, 20, 200, 100);
  //     ctx.fillRect(20, 20, 100, 100);
  //     if (ctx) {
  //       Alert.alert('Canvas is ready');
  //     }
  //   }
  // }, [ref]);

  const onAnimationStart = () => {
    setVisible(false);
  };

  const onAnimationEnd = (finished?: boolean) => {
    if (finished) {
      setVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Zoom>
        <Image
          style={{
            width: dataRoom.imageInfo.width / 4,
            height: dataRoom.imageInfo.height / 4,
          }}
          source={Floor3FE_PNG}
        />
      </Zoom>
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

export default gestureHandlerRootHOC(RoomScreen2);
