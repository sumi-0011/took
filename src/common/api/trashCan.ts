import {
  firebase,
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {getUserInfo} from './fireAuth';

const trashCans = firebase.firestore().collection('trashCans');
const users = firebase.firestore().collection('users');
const {uid} = getUserInfo();

export async function getStaredTrashCans() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();
    const stars = userData?.stars;

    const staredTrashCans: (FirebaseFirestoreTypes.DocumentData | undefined)[] =
      [];

    for (const staredItemId of stars) {
      const trashCanDoc = await trashCans.doc(staredItemId).get();
      const trashCanData = trashCanDoc.data();
      staredTrashCans.push(trashCanData);
    }

    return staredTrashCans;
  } catch (error) {
    console.log(error);
  }
}

export async function getRegisterTrashCans() {
  try {
    const userDoc = await users.doc(uid).get();
    const userData = userDoc.data();
    const registed = userData?.registedTrashCans;
    const registedTrashCans: (
      | FirebaseFirestoreTypes.DocumentData
      | undefined
    )[] = [];

    for (const staredItemId of registed) {
      const trashCanDoc = await trashCans.doc(staredItemId).get();
      const trashCanData = trashCanDoc.data();
      registedTrashCans.push(trashCanData);
    }

    return registedTrashCans;
  } catch (error) {
    console.log(error);
  }
}
