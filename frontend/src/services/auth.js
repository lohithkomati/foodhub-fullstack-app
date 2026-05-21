import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

export const registerUser = async (
  email,
  password
) => {

  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  return userCredential.user;
};

export const loginUser = async (
  email,
  password
) => {

  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return userCredential.user;
};

export const googleLogin = async () => {

  const result = await signInWithPopup(
    auth,
    provider
  );

  return result.user;
};

export const logoutUser = async () => {

  await signOut(auth);

};