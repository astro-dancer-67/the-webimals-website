// Initalize our app
firebase.initializeApp({
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

// Get Firebase Authenication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider)

// Get Blogs
const blogs = document.querySelector('#blog-posts');

// Connect To database
firestore.settings({timestampsInSnapshots: true})
firestore.collection('blog posts').get()
.then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    console.log(snapshot.docs.data());
  })
}).catch((err) => {
  console.log(err.message)
})

// Keep account data in localstorage
localStorage.setItem('email', 'null')
