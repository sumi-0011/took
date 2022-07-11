import {firebase} from '@react-native-firebase/firestore';
import {TrashCanType, TrashCanInfoType} from 'types/TrashCanType';
import {getUserInfo} from './fireAuthAPI';

const trashCans = firebase.firestore().collection('trashCans');
const users = firebase.firestore().collection('users');
const {uid} = getUserInfo();

export async function addTrashCan(addData: TrashCanInfoType) {
  try {
    const res = await trashCans.add(addData);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getTrashCan(TCId: string) {
  let result;
  await trashCans
    .get()
    .then(res => {
      res.forEach(function (doc) {
        if (TCId === doc.id) {
          const trashCanData = doc.data();
          // console.log('trashCanData', trashCanData);
          result = trashCanData;
        }
      });
    })
    .catch(e => console.log(e));

  return result;
}

export async function getStaredTrashCans() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();
    const stars: string[] = userData?.stars;

    const staredTrashCans: TrashCanInfoType[] = [];

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
    console.log(error);
  }
}

export async function getTrashCans() {
  const trashCanList: TrashCanType[] = [];

  await trashCans
    .get()
    .then(res => {
      res.forEach(function (doc) {
        const trashCanData = doc.data();
        // console.log('trashCanData', trashCanData);
        trashCanList.push({
          id: doc.id,
          name: trashCanData.name,
          tags: trashCanData.tags,
          coordinate: trashCanData.coordinate,
          trashImage: trashCanData.trashImage,
          reportUsers: [],
          isFull: false,
        });
      });
    })
    .catch(e => console.log(e));
  return trashCanList;
}

export async function getRegisterTrashCans() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();
    const registed = userData?.registedTrashCans;
    const registedTrashCans: TrashCanInfoType[] = [];

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
    console.log(error);
  }
}
