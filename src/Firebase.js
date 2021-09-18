import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCUmPYzR7vb0hmWmYPX-4kGbRCMyTx-WU8",
    authDomain: "disneyplus-198fc.firebaseapp.com",
    projectId: "disneyplus-198fc",
    storageBucket: "disneyplus-198fc.appspot.com",
    messagingSenderId: "506303953590",
    appId: "1:506303953590:web:293c66d8e5157911294417",
    measurementId: "G-SMJ09K4JWS"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
