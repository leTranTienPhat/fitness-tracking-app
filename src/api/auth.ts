import { configureAuth } from "react-query-auth";
import { localStorage } from "../storage/localStorage";
import { auth } from "@/src/firebase";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export type LoginCredentials = {
  username: string;
  password: string;
};

// export type RegisterCredentials = {
//   email: string;
//   name: string;
//   password: string;
// };

async function handleUserResponse(data: UserCredential) {
  const { user } = data;
  localStorage.setToken(user.accessToken);
}

async function userFn() {
  const user = auth.currentUser;
  console.log("User: ", user);
  return user ?? null;
}

function loginFn(data: LoginCredentials) {
  const { username, password } = data;
  signInWithEmailAndPassword(auth, username, password).then(
    (userCredential) => {
      return userCredential;
    }
  );
}

async function registerFn(data: LoginCredentials) {
  const { username, password } = data;
  createUserWithEmailAndPassword(auth, username, password).then(
    (userCredential) => {
      handleUserResponse(userCredential);
    }
  );
}

async function logoutFn() {
  signOut(auth).then(() => {
    alert("Signed out successfull");
  });
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });
