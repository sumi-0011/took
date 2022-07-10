import {firebase} from '@react-native-firebase/firestore';
import {IUserInfo} from 'types/User';
import {getUserInfo} from './fireAuth';

const users = firebase.firestore().collection('users');
const {uid} = getUserInfo();

export async function getUser() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();

    return {...userData} as IUserInfo;
  } catch (error) {
    console.log(error);
  }
}

export async function updateStar(dosId: string, newStars: any) {
  await users
    .doc(dosId)
    .update({
      stars: newStars,
    })
    .then(res => {
      return res;
    })
    .catch(e => {
      console.log(e);
    });
}

export async function updateLastTookTime(dosId: string, tookCnt: number) {
  await users
    .doc(dosId)
    .update({
      lastTookTime: new Date(),
      tookCnt: tookCnt + 1,
    })
    .then(res => {
      return res;
    })
    .catch(e => {
      console.log(e);
    });
}
