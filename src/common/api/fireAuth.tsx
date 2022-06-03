import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';

const users = firebase.firestore().collection('users');

export function isLoggedIn() {
  return auth().currentUser ? true : false;
}
export function getUserInfo() {
  const user = auth().currentUser;
  console.log(user);
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

    users.doc(response.user.uid).set();

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
