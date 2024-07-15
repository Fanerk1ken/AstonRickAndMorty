import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "rsuite/dist/rsuite.min.css";
import "./assets/styles/variables.css";
import "./main.css";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzAAUH6TNIVW9UO7E9TuHpIpkpR_v88J8",
  authDomain: "astonrickandmorty.firebaseapp.com",
  projectId: "astonrickandmorty",
  storageBucket: "astonrickandmorty.appspot.com",
  messagingSenderId: "418956829815",
  appId: "1:418956829815:web:5f9048a0093abe78d01272",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signUp(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

export function signIn(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
