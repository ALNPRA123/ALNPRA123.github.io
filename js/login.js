// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC_39NzAnnktEpSUBnBVAm1YUQB7BP9qzw",
    authDomain: "user-2021-juni.firebaseapp.com",
    databaseURL: "https://user-2021-juni-default-rtdb.firebaseio.com",
    projectId: "user-2021-juni",
    storageBucket: "user-2021-juni.appspot.com",
    messagingSenderId: "527266368773",
    appId: "1:527266368773:web:41dab93a19ae215257bb6c",
    measurementId: "G-9CT4YQSGDG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firebaseRef = firebase.database().ref('emails');
  document.querySelector('#submitBtn').addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    firebaseRef.push(email);
  });

  var firebaseRef = firebase.database().ref('names');
  document.querySelector('#submitBtn').addEventListener('click', ()=>{
    const name = document.getElementById('name').value;
    firebaseRef.push(name);
  });