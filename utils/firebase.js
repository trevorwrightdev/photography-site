import { initializeApp, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import 'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAioJHt2125WJYoVmRBG0m21ylePsgGjck",
  authDomain: "leemartinos.firebaseapp.com",
  projectId: "leemartinos",
  storageBucket: "leemartinos.appspot.com",
  messagingSenderId: "1036414473609",
  appId: "1:1036414473609:web:f3f7fff4a7118861513d58"
};

let app 
try {
  app = getApp()
} catch {
  app = initializeApp(firebaseConfig)
}

const firestore = getFirestore(app, {})

export { firestore }