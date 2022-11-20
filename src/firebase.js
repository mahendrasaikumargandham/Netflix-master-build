import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLMJNKa5mvlOozgWoQCjeCmDqLihKz-lQ",
  authDomain: "netflix-master-build.firebaseapp.com",
  projectId: "netflix-master-build",
  storageBucket: "netflix-master-build.appspot.com",
  messagingSenderId: "100892276256",
  appId: "1:100892276256:web:0d4fff9fc6f6defeb32e45",
  measurementId: "G-WX3V3L2K0D",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

export { authentication };
