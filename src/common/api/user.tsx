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
      return res;
    })
    .catch(e => {
      console.log(e);
    });
}

export async function updateLastTookTime(dosId: string, tookCnt: number) {
  await users
    .doc(dosId)
    .update({
      lastTookTime: new Date(),
      tookCnt: tookCnt + 1,
    })
    .then(res => {
      return res;
    })
    .catch(e => {
      console.log(e);
    });
}