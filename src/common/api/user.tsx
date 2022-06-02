import {firebase} from '@react-native-firebase/firestore';

const users = firebase.firestore().collection('users');

export async function getUser(uid: string) {
  let result;
  await users
    .get()
    .then(res => {
      res.forEach(function (doc) {
        let docs = doc.data();
        if (docs.uid === uid) {
          result = {id: doc.id, ...docs};
        }
      });
    })
    .catch(e => console.log(e));
  return result;
}

export async function updateStar(dosId: string, newStars: any) {
  await users
    .doc(dosId)
    .update({
      stars: newStars,
    })
    .then(res => {
      console.log('add star', res);
      return res;
    })
    .catch(e => {
      console.log(e);
    });
}

export async function updateLastTookTime(dosId: string) {
  await users
    .doc(dosId)
    .update({
      lastTookTime: new Date(),
    })
    .then(res => {
      console.log('update lastTookTime', res);
      return res;
    })
    .catch(e => {
      console.log(e);
    });
}
