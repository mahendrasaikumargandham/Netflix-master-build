import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnxWISey97Yx3DpWoPL9p05WD2fSdye_k",
  authDomain: "netflix-build-ea9ad.firebaseapp.com",
  projectId: "netflix-build-ea9ad",
  storageBucket: "netflix-build-ea9ad.appspot.com",
  messagingSenderId: "697537803003",
  appId: "1:697537803003:web:836540ce2bbe761768765e",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

export { authentication };
