// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBdqaMctIiHNSmYSko_PVMHDWorB5tlVxs",
    authDomain: "user-2021-maret.firebaseapp.com",
    projectId: "user-2021-maret",
    storageBucket: "user-2021-maret.appspot.com",
    messagingSenderId: "1002404708650",
    appId: "1:1002404708650:web:3d3b7fe54089b1ca5bde53",
    measurementId: "G-ZWRVM9HZ5E"
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