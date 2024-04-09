// import {initializeApp} from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAdOPrpPzhCQH9H6m4hwc_bsSi9UeBAzGg",
    authDomain: "chatapplication-4806d.firebaseapp.com",
    projectId: "chatapplication-4806d",
    storageBucket: "chatapplication-4806d.appspot.com",
    messagingSenderId: "406598559379",
    appId: "1:406598559379:web:dcc239a29687c50485cf66",
    measurementId: "G-DS6WDR54GS"
};
const app=initializeApp(firebaseConfig);
// console.log(app)
const auth=getAuth(app)
console.log(auth)

export default auth