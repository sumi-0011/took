import {firebase} from '@react-native-firebase/firestore';
import {UserInfoType} from 'types/UserType';
import {getUserInfo} from './fireAuthAPI';

const users = firebase.firestore().collection('users');
const {uid} = getUserInfo();

export async function getUser() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();
    const lastTime = userData?.lastTookTime.toDate(); //FireStoreTimeStamp => Date
    return {...userData, lastTookTime: lastTime} as UserInfoType;
  } catch (error) {
    console.log(error);

    return {
      tookCnt: 0,
      lastTookTime: new Date(),
      stars: [''],
      registedTrashCans: [''],
    } as UserInfoType;
  }
}

export async function updateStar(newStars: string[]) {
  try {
    const res = await users.doc(uid).update({
      stars: newStars,
    });

    return res;
  } catch (error) {
    console.log('updateStar api error: ', error);
  }
}

export async function updateRegisterTrashCan(newRegisterTrashCans: string[]) {
  try {
    const response = await users.doc(uid).update({
      registedTrashCans: newRegisterTrashCans,
    });

    return response;
  } catch (error) {
    console.log('update register trash can error', error);
  }
}

export async function updateLastTookTime(tookCnt: number) {
  try {
    const res = await users.doc(uid).update({
      lastTookTime: new Date(),
      tookCnt: tookCnt + 1,
    });
    console.log(' updateLastTookTime res: ', res);
    return res;
  } catch (error) {
    console.log('updateLastTookTime api error: ', error);
  }
}
