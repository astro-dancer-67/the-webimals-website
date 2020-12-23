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

// Get Blogs
const blogs = document.querySelector('#blog-posts');

// Make a render function
const render = (doc) => {
  // Get Blogs
  const blogs = document.querySelector('#blog-posts');

  const title = doc.data().title;
  const paragraghs = doc.data().paragraghs;
  const imageURL = doc.data().photoURL;
  
  const titleh1 = document.createElement('h1');
  const paragraghsP = document.createElement('p');
  const image = document.createElement('image');
  
  titleh1.innerHTML = title;
  paragraghsP.innerHTMl = paragraghs;  
  
  blogs.appendChild(titleh1);
  blogs.appendChild(paragraghsP);
}
// Connect To database
firestore.settings({timestampsInSnapshots: true})
firestore.collection('blog posts').get()
.then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    render(doc);
  })
}).catch((err) => {
  console.log(err.message)
})
