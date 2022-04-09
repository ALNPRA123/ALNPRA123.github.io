// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCCBxd3Fgf9G1re0vUR8_TGqHh6exzx690",
    authDomain: "user-04-2022.firebaseapp.com",
    projectId: "user-04-2022",
    storageBucket: "user-04-2022.appspot.com",
    messagingSenderId: "945593956756",
    appId: "1:945593956756:web:4b8947d6405f9b38c47781",
    measurementId: "G-1V7EYXJL0K"
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