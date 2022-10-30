import {firebase} from '@react-native-firebase/firestore';
import {TrashCanInfoType} from 'types/TrashCanType';
import {UserInfoType} from 'types/UserType';
import {getUserInfo} from './fireAuthAPI';

const users = firebase.firestore().collection('users');
const trashCans = firebase.firestore().collection('trashCans');
const {uid} = getUserInfo();

export async function getUser() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();
    const lastTime = userData?.lastTookTime.toDate(); //FireStoreTimeStamp => Date
    return {...userData, lastTookTime: lastTime} as UserInfoType;
  } catch (error) {
    console.warn(error);

    return {
      tookCnt: 0,
      lastTookTime: new Date(),
      stars: [''],
      registedTrashCans: [''],
    } as UserInfoType;
  }
}

export async function getStaredTrashCansID() {
  const user = await getUser();
  const stars: string[] = user.stars;

  return stars;
}

export async function getStaredTrashCans() {
  try {
    const staredTrashCans: TrashCanInfoType[] = [];

    const stars = await getStaredTrashCansID();

    for (const staredItemId of stars) {
      const trashCanDoc = await trashCans.doc(staredItemId).get();
      const trashCanData = trashCanDoc.data();
      staredTrashCans.push({
        ...trashCanData,
        id: staredItemId,
      } as TrashCanInfoType);
    }

    return staredTrashCans;
  } catch (error) {
    console.warn(error);
  }
}

export async function addStaredTrashCan(trashCanID: string) {
  const stars = await getStaredTrashCansID();

  try {
    const res = await users.doc(uid).update({
      stars: [...stars, trashCanID],
    });

    return res;
  } catch (error) {
    console.warn('addStar api error: ', error);
  }
}

export async function deleteStaredTrashCan(trashCanID: string) {
  const stars = await getStaredTrashCansID();

  try {
    const response = await users.doc(uid).update({
      stars: stars.filter(id => trashCanID !== id),
    });

    return response;
  } catch (error) {
    console.warn('delete register trash can error', error);
  }
}

export async function getRegisterTrashCansID() {
  const user = await getUser();
  const registed: string[] = user.registedTrashCans;

  return registed;
}

export async function getRegisterTrashCans() {
  try {
    const registedTrashCans: TrashCanInfoType[] = [];

    const registed = await getRegisterTrashCansID();

    for (const registedItemId of registed) {
      const trashCanDoc = await trashCans.doc(registedItemId).get();
      const trashCanData = trashCanDoc.data();

      registedTrashCans.push({
        ...trashCanData,
        id: registedItemId,
      } as TrashCanInfoType);
    }

    return registedTrashCans;
  } catch (error) {
    console.warn('getRegisterTrashCans api error: ', error);
  }
}

export async function addRegisterTrashCan(trashCanID: string) {
  const registed = await getRegisterTrashCansID();

  try {
    const response = await users.doc(uid).update({
      registedTrashCans: [...registed, trashCanID],
    });

    return response;
  } catch (error) {
    console.warn('update register trash can error', error);
  }
}

export async function deleteRegisterTrashCan(trashCanID: string) {
  const registed = await getRegisterTrashCansID();

  try {
    const response = await users.doc(uid).update({
      registedTrashCans: registed.filter(id => trashCanID !== id),
    });

    await trashCans.doc(trashCanID).delete();

    return response;
  } catch (error) {
    console.warn('delete register trash can error', error);
  }
}

export async function updateLastTookTime(tookCnt: number) {
  try {
    const res = await users.doc(uid).update({
      lastTookTime: new Date(),
      tookCnt: tookCnt + 1,
    });
    return res;
  } catch (error) {
    console.warn('updateLastTookTime api error: ', error);
  }
}
