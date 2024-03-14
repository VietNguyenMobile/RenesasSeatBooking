import React, {useState, useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Button, SafeAreaView, StyleSheet, Image as RNImage} from 'react-native';
import {
  Canvas,
  Circle,
  Group,
  Rect,
  SkImage,
  Mask,
  rrect,
  rect,
  Box,
  Image,
  Skia,
  Fill,
  ImageFormat,
  useCanvasRef,
} from '@shopify/react-native-skia';

import RoomScreen from './src/screens/RoomScreen';
import RoomScreen1 from './src/screens/RoomScreen1';
import RoomScreen2 from './src/screens/RoomScreen2';

const urlImage =
  'https://images.unsplash.com/photo-1670272501077-c72d2d42f362?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const generateSkiaImage = async (path: string) => {
  return await Skia.Data.fromURI(path).then(data =>
    Skia.Image.MakeImageFromEncoded(data),
  );
};

const App = () => {
  // const [image, setImage] = useState<SkImage>();
  // const [capturedImage, setCapturedImage] = useState('');
  // const canvasRef = useCanvasRef();

  // useEffect(() => {
  //   generateSkiaImage(urlImage).then(value => {
  //     if (value) {
  //       setImage(value);
  //     }
  //   });
  // }, []);

  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <Canvas style={{width: 200, height: 200}}>
    //     <Rect width={200} height={200} color={'red'} />
    //   </Canvas> */}

    //   <Canvas ref={canvasRef} style={{width: 300, height: 300}}>
    //     <Fill color="blue" />
    //     <Mask mask={<Box box={rrect(rect(50, 50, 200, 200), 10, 10)} />}>
    //       {image ? (
    //         <Image
    //           x={30}
    //           y={20}
    //           image={image}
    //           width={300}
    //           height={300}
    //           fit="cover"
    //         />
    //       ) : null}
    //     </Mask>
    //   </Canvas>
    //   <Button
    //     title="Capture"
    //     onPress={() => {
    //       const skImg = canvasRef.current?.makeImageSnapshot();
    //       console.log('skImg: ', skImg);
    //       if (skImg) {
    //         const base64 = skImg.encodeToBase64(ImageFormat.PNG, 100);
    //         // console.log('base64: ', base64);
    //         setCapturedImage('data:image/png;base64,' + base64);
    //       }
    //     }}
    //   />
    //   {capturedImage ? (
    //     <RNImage
    //       source={{uri: capturedImage}}
    //       style={{width: 200, height: 200, backgroundColor: 'red'}}
    //     />
    //   ) : null}
    // </SafeAreaView>
    <GestureHandlerRootView style={{flex: 1}}>
      <RoomScreen1 />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
