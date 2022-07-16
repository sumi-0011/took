import React from 'react';
import {StyleProp, ViewStyle, Platform, LogBox} from 'react-native';
import {Box, Text} from 'native-base';
import {RNCamera} from 'react-native-camera';
import {hasAndroidPermission} from 'utils/permission';
import TOOKBtn from '@components/TookButton';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

interface CameraProps {
  nextPage: (arg: string) => void;
}

function Camera({nextPage}: CameraProps) {
  const takePicture = async (camera: RNCamera) => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    if (data) {
      if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
        return;
      }
      // NOTE :사진 갤러리에 저장 =>  const result = await CameraRoll.save(data.uri); //
      nextPage(data.uri);
    }
  };

  return (
    <RNCamera
      style={RNCameraStyle}
      type={RNCamera.Constants.Type.back}
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
          return (
            <Box style={PendingStyle}>
              <Text>Waiting</Text>
            </Box>
          );
        }
        return <TOOKBtn name={'SNAP'} onPress={() => takePicture(camera)} />;
      }}
    </RNCamera>
  );
}

const PendingStyle: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: 'lightgreen',
  justifyContent: 'center',
  alignItems: 'center',
};

const RNCameraStyle: StyleProp<ViewStyle> = {
  flex: 1,
  justifyContent: 'flex-end',
};

export default Camera;
