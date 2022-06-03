import {firebase} from '@react-native-firebase/firestore';
import {ITCRegisterInfo} from 'types/TCRegist';

const trashCans = firebase.firestore().collection('trashCans');

export async function addTC(addData: ITCRegisterInfo) {
  await trashCans
    .add(addData)
    .then(res => {
      console.log('addTC', res);
    })
    .catch(e => console.log(e));
}
// db.collection("cities").document("LA")
//         .set(city)
//         .addOnSuccessListener { Log.d(TAG, "DocumentSnapshot successfully written!") }
//         .addOnFailureListener { e -> Log.w(TAG, "Error writing document", e) }
