import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';

export const createTrashCanImage = async (fileName: string, base64: string) => {
  try {
    const reference = storage().ref(`/TrashCan/${fileName}`); // 업로드할 경로 지정

    if (Platform.OS === 'android') {
      await reference.putString(base64, 'base64', {
        contentType: 'jpg',
      });
    }

    const imageUrl = await reference.getDownloadURL();

    return imageUrl;
  } catch (error) {
    console.error(error);
  }
};
