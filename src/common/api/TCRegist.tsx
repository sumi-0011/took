import {firebase} from '@react-native-firebase/firestore';
import {ITCRegisterInfo} from 'types/TCRegist';

const trashCans = firebase.firestore().collection('trashCans');

export async function addTC(addData: ITCRegisterInfo) {
  await trashCans
    .add(addData)
    .then(res => {
      return res;
    })
    .catch(e => console.log(e));
}
