import {FIREBASE_ERR_USER_NOT_FOUND} from 'utils/filebaseCode';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import {FirebaseAuthError} from 'types/FirebaseType';

const users = firebase.firestore().collection('users');

export const isLoggedIn = auth().currentUser ? true : false;

export function getUserInfo() {
  const user = auth().currentUser;

  return {
    photoURL: user?.photoURL,
    displayName: user?.displayName,
    uid: user?.uid,
    email: user?.email,
  };
}

export async function signIn(email: string, password: string) {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return {status: 'success', ...response};
  } catch (error) {
    const err = error as FirebaseAuthError;

    let message;
    let code = err.code;
    let name = err.name;

    if (err.code === FIREBASE_ERR_USER_NOT_FOUND) {
      message = '이메일을 다시 확인해주세요.';
    }
    return {status: 'fail', message, code, name};
  }
}

export async function signUp(
  email: string,
  password: string,
  userName: string,
) {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    await changeProfile({userName});

    await users.doc(response.user.uid).set({
      tookCnt: 0,
      lastTookTime: new Date(),
      stars: [],
      registedTrashCans: [],
      uid: response.user.uid,
    });

    return {status: 'success', ...response};
  } catch (error) {
    const err = error as FirebaseAuthError;

    let code = err.code;
    let name = err.name;
    let message = err.message;

    // if (err.code === FIREBASE_ERR_USER_NOT_FOUND) {
    //   message = '이메일을 다시 확인해주세요.';
    // }

    return {status: 'fail', message, code, name};
  }
}

export async function changeProfile({userName}: {userName: string}) {
  try {
    const response = await auth().currentUser?.updateProfile({
      displayName: userName,
    });

    return response;
  } catch (error) {
    console.warn(error);
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

    console.warn(response);

    return response;
  } catch (error) {
    console.warn(error);
  }
}
