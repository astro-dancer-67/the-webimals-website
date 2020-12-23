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

// Make a render function
const render = (doc) => {
  const title = doc.title.data();
  const paragraghs = doc.paragraghs.data();
  const imageURL = doc.paragraghs.data();
  
  const titleh1 = document.createElement('h1');
  const paragraghsP = document.createElement('p');
  const image = document.createElement('image');
  
  titleh1.innerHTML = title;
  paragraghsP.innerHTMl = paragraghs;  
}
// Connect To database
firestore.settings({timestampsInSnapshots: true})
firestore.collection('blog posts').get()
.then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    console.log(doc.data());
  })
}).catch((err) => {
  console.log(err.message)
})
