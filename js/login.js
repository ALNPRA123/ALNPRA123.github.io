// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDgbrz97xl_8_gKrN-Fya2PHW7oBwODPIA",
    authDomain: "user-2021.firebaseapp.com",
    databaseURL: "https://user-2021-default-rtdb.firebaseio.com",
    projectId: "user-2021",
    storageBucket: "user-2021.appspot.com",
    messagingSenderId: "1086291048443",
    appId: "1:1086291048443:web:1433cad1c203b67ee53d5e",
    measurementId: "G-1Y3KB15J11"
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