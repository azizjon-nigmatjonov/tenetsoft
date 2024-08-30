import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjpg-5RUexcozmPhuOHUffPaoyvgZl0PY",
  authDomain: "tenetsoft-64cc2.firebaseapp.com",
  databaseURL: "https://abror-6236e-default-rtdb.firebaseio.com",
  projectId: "tenetsoft-64cc2",
  storageBucket: "tenetsoft-64cc2.appspot.com",
  messagingSenderId: "512312673755",
  appId: "1:512312673755:web:c06de2a15bfe9686f6d3fe",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
