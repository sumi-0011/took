import React, {useCallback} from 'react';
import {StyleProp, ViewStyle, Platform, LogBox} from 'react-native';
import {Box, Text} from 'native-base';
import {RNCamera} from 'react-native-camera';
import {hasAndroidPermission} from 'utils/permission';
import TOOKBtn from '@components/TookButton';
import {createTrashCanImage} from '@api/storageAPI';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

interface CameraProps {
  moveToNextPage: (arg: string) => void;
}

function Camera({moveToNextPage}: CameraProps) {
  const takePicture = useCallback(
    async (camera: RNCamera) => {
      const options = {quality: 0.5, base64: true};
      const {uri, base64} = await camera.takePictureAsync(options);

      if (base64 && uri) {
        if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
          return;
        }

        const startIndex = uri.lastIndexOf('/');
        const endIndex = uri.lastIndexOf('.jpg');

        const imageName = uri.slice(startIndex + 1, endIndex);

        const imageUrl = await createTrashCanImage(imageName, base64);

        moveToNextPage(imageUrl ?? '');
      }
    },
    [moveToNextPage],
  );

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
        return <TOOKBtn name="사진 촬영" onPress={() => takePicture(camera)} />;
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
