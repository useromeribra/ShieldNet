import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjf9K9v8kMBa9SMZkkmjFOPL8ckFzT_zo",
  authDomain: "shieldnet-web.firebaseapp.com",
  projectId: "shieldnet-web",
  storageBucket: "shieldnet-web.appspot.com",
  messagingSenderId: "302819055337",
  appId: "1:302819055337:web:a24861946e176b40b7c278",
  measurementId: "G-3H9FXJF2CJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.firebaseAuth = auth;
