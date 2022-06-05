import {firebase} from '@react-native-firebase/firestore';
import {ITrashCanInfo} from 'types/TrashCan';
import {getUserInfo} from './fireAuth';

const trashCans = firebase.firestore().collection('trashCans');
const users = firebase.firestore().collection('users');
const {uid} = getUserInfo();

export async function getStaredTrashCans() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();
    const stars: string[] = userData?.stars;

    const staredTrashCans: ITrashCanInfo[] = [];

    for (const staredItemId of stars) {
      const trashCanDoc = await trashCans.doc(staredItemId).get();
      const trashCanData = trashCanDoc.data();
      staredTrashCans.push({
        ...trashCanData,
        id: staredItemId,
      } as ITrashCanInfo);
    }

    return staredTrashCans;
  } catch (error) {
    console.log(error);
  }
}
//모든 쓰레기통
export async function getTrashCans() {
  const trashCanList: any[] = [];

  await trashCans
    .get()
    .then(res => {
      console.log(res);
      res.forEach(function (doc) {
        // console.log(doc);
        trashCanList.push({
          ...doc.data(),
          id: doc.id,
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
    const registedTrashCans: ITrashCanInfo[] = [];

    for (const registedItemId of registed) {
      const trashCanDoc = await trashCans.doc(registedItemId).get();
      const trashCanData = trashCanDoc.data();
      registedTrashCans.push({
        ...trashCanData,
        id: registedItemId,
      } as ITrashCanInfo);
    }

    return registedTrashCans;
  } catch (error) {
    console.log(error);
  }
}
