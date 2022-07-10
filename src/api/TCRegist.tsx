import {firebase} from '@react-native-firebase/firestore';
import {ITrashCanInfo} from 'types/TrashCan';

const trashCans = firebase.firestore().collection('trashCans');

export async function addTC(addData: ITrashCanInfo) {
  await trashCans
    .add(addData)
    .then(res => {
      return res;
    })
    .catch(e => console.log(e));
}
