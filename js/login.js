// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDXr4bFxXsMHavs0piOyjh9ShA06Vd59JM",
    authDomain: "userversi1.firebaseapp.com",
    databaseURL: "https://userversi1.firebaseio.com",
    projectId: "userversi1",
    storageBucket: "userversi1.appspot.com",
    messagingSenderId: "271255196088",
    appId: "1:271255196088:web:78bfd82c181f8629737f4d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firebaseRef = firebase.database().ref('emails');
  document.querySelector('#submitBtn').addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    firebaseRef.push(email);
  });