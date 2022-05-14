import {Box, Button, Center, Image, Text} from 'native-base';
import React, {useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {PermissionsAndroid, Platform} from 'react-native';
type Props = {};
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);
interface ICamera {
  imageURL: string;
  setImageURL: (arg0: string) => void;
  nextPage: (arg: string) => void;
}
const Camera = ({imageURL, setImageURL, nextPage}: ICamera) => {
  const getPhotos = async () => {
    //갤러리에서 사진을 가져오는 부분
    try {
      const {edges} = await CameraRoll.getPhotos({
        first: 2,
      });
      console.log(edges);
      // setImageURL(edges[0].node.image.uri);
    } catch (error) {
      console.log('getPhoto', error);
    }
  };
  const takePicture = async (camera: RNCamera) => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    // console.log('😻 data', data);
    if (data) {
      if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
        return;
      }
      const result = await CameraRoll.save(data.uri); //사진 갤러리에 저장
      console.log('snap result', result);
      // setImageURL(data.uri); //사진 데이터
      // console.log(imageURL);
      nextPage(data.uri);
    }
  };
  return (
    <Box flex={1}>
      <RNCamera
        style={{flex: 1, justifyContent: 'flex-end'}}
        type={RNCamera.Constants.Type.back}
        // flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') {
            return <PendingView />;
          }
          return (
            <Box>
              <Button onPress={() => takePicture(camera)}>SNAP</Button>
            </Box>
          );
        }}
      </RNCamera>
      {/* </Box> */}
    </Box>
  );
};

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}
export default Camera;
