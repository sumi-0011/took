import auth from '@react-native-firebase/auth';

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
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function signUp(email: string, password: string, name: string) {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    await changeProfile({name});

    return {statusCode: 200, ...response};
  } catch (error) {
    console.log(error);
  }
}

export async function changeProfile({name}: {name: string}) {
  try {
    const response = await auth().currentUser?.updateProfile({
      displayName: name,
    });

    console.log(response);
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
