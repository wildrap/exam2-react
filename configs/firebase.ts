import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";

let config = {
  apiKey: "AIzaSyB-fKWy5Qj9bblZATMXkQRVi90P4jJH3Bg",
  authDomain: "exam2-react.firebaseapp.com",
  projectId: "exam2-react",
  storageBucket: "exam2-react.appspot.com",
  messagingSenderId: "784546283894",
  appId: "1:784546283894:web:06c8ff3c752a024d843a57",
};

const app = initializeApp(config);
const db = getFirestore(app);

export { db };
