import firebase from 'firebase/app';
import '@firebase/firestore';


const app = firebase.initializeApp ({
    apiKey: process.env.API_KEY,
    authDomain: "react-7130.firebaseapp.com",
    projectId: "react-7130",
    storageBucket: "react-7130.appspot.com",
    messagingSenderId: "384975939963",
    appId: "1:384975939963:web:beaf95195f64b7c0f675de"
  }
)


export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}