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
import SvgPanZoom, {SvgPanZoomElement} from 'react-native-svg-pan-zoom';

import data from '../assets/data/listRoom.json';

const Floor4FE = require('../assets/images/4FE.jpg');
const Floor3FE_PNG = require('../assets/images/3FW-2.png');

import Floor3FW_SVG from '../assets/images/3FW-1.svg';
import Floor3FW from '../assets/images/3FW.jpg';

const avatarLink =
  'https://rvc-booking-prod.appspot.com.storage.googleapis.com/';

const RoomScreen1 = () => {
  const [dataRoom, setDataRoom] = useState(data.data[5]);
  const [dataSlot, setDataSlot] = useState(data.data[5].slots);

  console.log('dataRoom.roomName: ', dataRoom.roomName);
  console.log('dataSlot: ', dataSlot[0]);

  return (
    <View style={styles.container}>
      <SvgPanZoom
        canvasHeight={dataRoom.imageInfo.width}
        canvasWidth={dataRoom.imageInfo.height}
        minScale={0.4}
        initialZoom={0.8}
        maxScale={2}
        // isScaling={true}
        onZoom={zoom => {
          console.log('onZoom:' + zoom);
        }}
        canvasStyle={{backgroundColor: 'white'}}
        viewStyle={{backgroundColor: 'green'}}>
        {/* <G>
          <Floor3FW_SVG
            // width={dataRoom.imageInfo.width / 4}
            // height={dataRoom.imageInfo.height / 4}
            width="100%"
            height="100%"
          /> */}
        {/* <ImageSVG width="100%" height="100%" href={Floor3FE_PNG} /> */}
        {/* {dataSlot.map(itemSlot => {
            return (
              <G key={itemSlot._id}>
                <SvgPanZoomElement
                  x={itemSlot.x}
                  y={itemSlot.y}
                  // r={'2'}
                  // fill={'red'}
                  onClick={() => {
                    console.log('onClick! ', itemSlot.name);
                  }}>
                  <Circle
                    // cx={itemSlot.x / 4}
                    // cy={itemSlot.y / 4}
                    // cx={itemSlot.x / 4}
                    // cy={itemSlot.y / 4}
                    r={8}
                    stroke="blue"
                    strokeWidth="1"
                    fill="red"
                  />
                  <TextSVG
                    // x={itemSlot.location_x / 4 + 2}
                    // y={itemSlot.location_y / 4 + 2}
                    x={-4}
                    y={8}
                    fontSize={'14'}
                    fill={'red'}>
                    {itemSlot.name}
                  </TextSVG>
                </SvgPanZoomElement>
              </G>
            );
          })} */}
        {/* </G> */}

        <G>
          <ImageSVG width="100%" height="100%" href={Floor3FW} />
          {dataSlot.map(itemSlot => {
            {
              /* console.log(
              'Avatar: ',
              itemSlot?.books.length > 0
                ? `${avatarLink}${itemSlot?.books[0]?.user?.photoPath}`
                : '',
            ); */
            }
            return (
              <G key={itemSlot._id}>
                <SvgPanZoomElement
                  x={itemSlot.x}
                  y={itemSlot.y}
                  // r={'2'}
                  // fill={'red'}
                  onClick={() => {
                    console.log('onClick! ', itemSlot.name);
                  }}>
                  {itemSlot.books.length > 0 ? (
                    <ImageSVG
                      width={8}
                      height={8}
                      // xlinkHref={`${avatarLink}${itemSlot.books[0].user.photoPath}`}
                      // source={{
                      //   uri: `${avatarLink}${itemSlot.books[0].user.photoPath}`,
                      // }}
                    />
                  ) : (
                    <Circle
                      r={8}
                      stroke="#A5A5A5"
                      strokeWidth="2"
                      fill="#A4FF86"
                    />
                  )}
                  <TextSVG x={-8} y={16} fontSize={'10'} fill={'red'}>
                    {itemSlot.name}
                  </TextSVG>
                </SvgPanZoomElement>
              </G>
            );
          })}
        </G>

        {/* Responds to clicks */}
        {/* <SvgPanZoomElement
          x={50}
          y={50}
          onClick={() => {
            console.log('onClick!');
          }}
          onClickCanceled={() => {
            console.log('onClickCanceled!');
          }}
          onClickRelease={() => {
            console.log('onClickRelease!');
          }}
          onDrag={() => {
            console.log('onDrag!');
          }}>
          <Circle
            cx={42}
            cy={42}
            r={42}
            stroke="blue"
            strokeWidth="2.5"
            fill="red"
          />
        </SvgPanZoomElement> */}
      </SvgPanZoom>
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

export default RoomScreen1;
