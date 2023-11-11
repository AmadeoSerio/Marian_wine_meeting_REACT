import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMzkoq2fhFsJ31Cx4z33jCOQlbYpv_N7w",
  authDomain: "wine--meeting.firebaseapp.com",
  projectId: "wine--meeting",
  storageBucket: "wine--meeting.appspot.com",
  messagingSenderId: "80085441251",
  appId: "1:80085441251:web:4a2ebf66cb2422d88a83d6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);