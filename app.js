// Initalize our app
firebase.firebase.initializeApp({
  apiKey: "AIzaSyAv3TPG0rtCa1p7sd3Tp607kWOYVvn_NAA",
  authDomain: "webimals-us.firebaseapp.com",
  databaseURL: "https://webimals-us-default-rtdb.firebaseio.com",
  projectId: "webimals-us",
  storageBucket: "webimals-us.appspot.com",
  messagingSenderId: "291693058015",
  appId: "1:291693058015:web:99ae9d69914bca64a6966a",
  measurementId: "G-WPRW2MCELB"
});

// Add Firstore
const firestore = firebase.firestore();
