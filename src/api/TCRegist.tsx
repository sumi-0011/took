import {firebase} from '@react-native-firebase/firestore';
import {TrashCanInfoType} from 'types/TrashCanType';

const trashCans = firebase.firestore().collection('trashCans');

export async function addTC(addData: TrashCanInfoType) {
  await trashCans
    .add(addData)
    .then(res => {
      return res;
    })
    .catch(e => console.log(e));
}
