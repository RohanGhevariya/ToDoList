import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAR1PTg-dMlFJR6DEd3vTClsfxKZoWZzRE",
  authDomain: "todolist-25b1d.firebaseapp.com",
  databaseURL: "https://todolist-25b1d-default-rtdb.firebaseio.com",
  projectId: "todolist-25b1d",
  storageBucket: "todolist-25b1d.appspot.com",
  messagingSenderId: "143511052742",
  appId: "1:143511052742:web:d939a1ae8e9e4c6c8f52c7",
  measurementId: "G-B9HEV8X4JM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
