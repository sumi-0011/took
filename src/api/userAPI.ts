import {firebase} from '@react-native-firebase/firestore';
import {UserInfoType} from 'types/UserType';
import {getUserInfo} from './fireAuthAPI';

const users = firebase.firestore().collection('users');
const {uid} = getUserInfo();

export async function getUser() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();

    return {...userData} as UserInfoType;
  } catch (error) {
    console.log(error);
  }
}

export async function updateStar(dosId: string, newStars: string[]) {
  try {
    const res = await users.doc(dosId).update({
      stars: newStars,
    });
    return res;
  } catch (error) {
    console.log('updateStar api error: ', error);
  }
}

export async function updateLastTookTime(dosId: string, tookCnt: number) {
  try {
    const res = await users.doc(dosId).update({
      lastTookTime: new Date(),
      tookCnt: tookCnt + 1,
    });
    return res;
  } catch (error) {
    console.log('updateLastTookTime api error: ', error);
  }
}
