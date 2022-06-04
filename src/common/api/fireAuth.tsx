import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';

const users = firebase.firestore().collection('users');

export function isLoggedIn() {
  return auth().currentUser ? true : false;
}
export function getUserInfo() {
  const user = auth().currentUser;

  return {
    photoURL: user?.photoURL,
    displayName: user?.displayName,
    uid: user?.uid,
  };
}

export async function signIn(email: string, password: string) {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return {status: 'success', ...response};
  } catch (error) {
    return {status: 'fail', error};
  }
}

export async function signUp(email: string, password: string, name: string) {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    await changeProfile({name});

    await users.doc(response.user.uid).set({
      tookCount: 0,
      lastTookTime: new Date(),
      bookmarks: [],
      registedTrashCans: [],
    });

    return {status: 'success', ...response};
  } catch (error) {
    return {status: 'fail', error};
  }
}

export async function changeProfile({name}: {name: string}) {
  try {
    const response = await auth().currentUser?.updateProfile({
      displayName: name,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export function subscribeAuth(callback: () => void) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}

export async function withdrawal() {
  try {
    const user = auth().currentUser;
    users.doc(user?.uid).delete();

    // TODO : 회원탈퇴전에 재로그인을 해야함
    const response = await user?.delete();

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
}
