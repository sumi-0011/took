import {firebase} from '@react-native-firebase/firestore';

const db = firebase.firestore().collection('users');

export async function getUser(uid: string) {
  let result;
  await db
    .get()
    .then(res => {
      res.forEach(function (doc) {
        let docs = doc.data();
        if (docs.uid === uid) {
          result = docs;
        }
      });
    })
    .catch(e => console.log(e));
  return result;
}
