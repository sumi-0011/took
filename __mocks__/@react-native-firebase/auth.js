export default () => ({
  signInWithEmailAndPassword: jest.fn((email, password) => {
    if (email === 'qudals7613@gmail.com' && password === '1q2w3e4r') {
      return {status: 'success'};
    } else {
      return {status: 'fail'};
    }
  }),
  createUserWithEmailAndPassword: jest.fn((email, password) => {
    if (email === 'qudals7613@gmail.com') {
      return {status: 'fail'};
    } else {
      return {status: 'success'};
    }
  }),
  signOut: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
});
