import {firebase} from '@react-native-firebase/firestore';
import {TrashCanInfoType} from 'types/TrashCanType';

const trashCans = firebase.firestore().collection('trashCans');

export async function addTC(addData: TrashCanInfoType) {
  try {
    const res =  await trashCans.add(addData)
    return res;
  } catch (error) {
    console.log(error)
  }
}
