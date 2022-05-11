import {Box, Text} from 'native-base';
import React from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {AppRegistry, StyleSheet, TouchableOpacity, View} from 'react-native';
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
const Camera = () => {
  return (
    <Box flex={1}>
      <Text>Camera</Text>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
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
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') {
            return <PendingView />;
          }
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => getPhotos()}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> GET </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </Box>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
const takePicture = async (camera: RNCamera) => {
  const options = {quality: 0.5, base64: true};
  const data = await camera.takePictureAsync(options);
  //  eslint-disable-next-line
  // console.log('😻 data', data);
  console.log(data.uri);

  if (data) {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    const result = await CameraRoll.save(data.uri);
    console.log('snap result', result);
  }
};
const getPhotos = async () => {
  try {
    const {edges} = await CameraRoll.getPhotos({
      first: 2,
    });
    console.log('get photo', edges);
  } catch (error) {
    console.log('getPhoto', error);
  }
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
