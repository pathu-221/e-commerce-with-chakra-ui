import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getFirestore, setDoc, addDoc, serverTimestamp, collection} from "firebase/firestore";

import { getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword, 
  updateProfile,
  getAdditionalUserInfo} from "firebase/auth";
import { FaTruckMonster } from "react-icons/fa";

const firebaseConfig = {
  apiKey: "AIzaSyAkySmt0Xoj_kDthQaZ9KoiXw0kH-7Ne_8",
  authDomain: "e-commerce-project-2ecff.firebaseapp.com",
  projectId: "e-commerce-project-2ecff",
  storageBucket: "e-commerce-project-2ecff.appspot.com",
  messagingSenderId: "924342514307",
  appId: "1:924342514307:web:1f642dd066f02b4b4fe1b6",
  measurementId: "G-LZZQD1VNC7"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const auth = getAuth(app);

export const signUpwithEmailandPassword = (email, password, displayName) => {
createUserWithEmailAndPassword(auth, email, password)
.then((userRef) => addUserToDatabase(userRef.user, {displayName: displayName}) ).catch(error => console.log(error));
};

export const addUserToDatabase = async (user, additionalData) => {
   const docRef = await addDoc(collection(db, "user"), {
    displayName: user.displayName ? user.displayName : additionalData.displayName,
    email: user.email,
    createdAt: serverTimestamp(),
    cart: [],
  },{merge: true});
}


export const signInwithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).catch(error => alert(error));
}


export const signout = () => auth.signOut();

export const signInwithGoogle = () => signInWithPopup(auth, provider);

const analytics = getAnalytics(app);